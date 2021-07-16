import "reflect-metadata";
import {createConnection, getConnection, getRepository} from "typeorm";
import { Category } from "./entity/Category";
import { Album } from "./entity/Album";
import { Photo } from "./entity/Photo";
import { PhotoMetadata } from "./entity/PhotoMetadata";
import {User, UserRole} from "./entity/User";
import { Question } from "./entity/Question";
import { Profile1 } from "./entity/Profile1";
import { User1 } from "./entity/User1";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
   
    //testUser();
    //testPhoto();
    //testGetRelationObj();
    //testAlbums();
    //testQueryBuilder();
    //testHasMetadata();
    //testQuestion();
    testUser1();
    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


let testUser = async function(){
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 225;
    user.role = UserRole.ADMIN;
    user.names = ['chen', 'qi']
    let userRepository = getRepository(User)
    await userRepository.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await userRepository.find();
    console.log("Loaded users: ", users);
}


let testPhoto = async function(){
 // 创建 photo
 let photo = new Photo();
 photo.name = "Mee and Bears";
 photo.description = "I am near polar bears";
 photo.filename = "photo-with-bears.jpg";
 photo.views = 1;
 photo.isPublished = true;

 // 创建 photo metadata
 let metadata = new PhotoMetadata();
 metadata.height = 640;
 metadata.width = 480;
 metadata.compressed = true;
 metadata.comment = "cybershoot";
 metadata.orientation = "portait";
 metadata.photo = photo; // 联接两者
 
 
 photo.metadata = metadata; // this way we connect them

 // 获取实体 repositories
 let photoRepository = getRepository(Photo);
 let metadataRepository = getRepository(PhotoMetadata);

 // 先保存photo
 await photoRepository.save(photo); // 如果 Photo.ts中 metadata 的属性 添加cascade: true，那么保存 Photo的同时，也保存了 PhotoMetadata

 // 然后保存photo的metadata
 // await metadataRepository.save(metadata);

 // 完成
 console.log("Metadata is saved, and relation between metadata and photo is created in the database too");    
}

// 取出关系对象的数据
let testGetRelationObj = async function(){
    let photoRepository = getRepository(Photo);
    let photos = await photoRepository.find({
        relations:['metadata']
    })
    console.log(photos)
}

let testAlbums = async function(){
    // create a few albums
let albumRepository = getRepository(Album);
let album1 = new Album();
album1.name = "Bears";
await albumRepository.save(album1);

let album2 = new Album();
album2.name = "Me";
await albumRepository.save(album2);

// create a few photos
let photo = new Photo();
photo.name = "Me and Bears";
photo.description = "I am near polar bears";
photo.views = 1;
photo.filename = "photo-with-bears.jpg";
photo.isPublished = true;
photo.albums = [album1, album2];
await getRepository(Photo).save(photo);

const loadedPhoto = await getRepository(Photo).findOne(1, { relations: ["albums"] });
console.log(loadedPhoto); // 会输出 albums

const loadedPhoto1 = await getRepository(Photo).findOne(1);
console.log(loadedPhoto1); // 不会输出 albums
}

let testQueryBuilder = async function(){
    let photos = await getRepository(Photo)
  .createQueryBuilder("photo1") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
  .where("photo1.isPublished = true")
  .getMany()
  console.log(photos)
}

let testHasMetadata = async function(){
    let connect = getConnection();
    if(connect.hasMetadata(User)){
        console.log(`${connect.name} has User Entity`);

        const userEntity = connect.getMetadata(User);
        console.log(userEntity)
    }
}

let testQuestion = async function(){
    const category1 = new Category();
    category1.name = "animals";

    const category2 = new Category();
    category2.name = "zoo";

    const question = new Question();
    question.title = 'gocpplua';
    question.text = 'gocpplua'
    question.categories = [category1, category2];
    let questionRepository = await getRepository(Question)
    await questionRepository.save(question);
}

let testUser1 = async function(){
    /*
    const profile = new Profile1();
    profile.gender = "male";
    profile.photo = "me.jpg";
    await getConnection().manager.save(profile);

    const user = new User1();
    user.name = "Joe Smith";
    user.profile1 = profile;
    await getConnection().manager.save(user);
    //*/

    /*
    const userRepository = getConnection().getRepository(User1);
    const users = await userRepository.find({ relations: ["profile1"] });
    console.log(users)

    const usersWithout = await userRepository.find();
    console.log(usersWithout)
    //*/

    const profileRepository = getConnection().getRepository(Profile1);
    const profiles = await profileRepository.find({ relations: ["user2"] });
    console.log(profiles)

    const profileWithout = await profileRepository.find();
    console.log(profileWithout)

}