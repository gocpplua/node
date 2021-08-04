import {Post} from "../entity/Post";
import {EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent} from "typeorm";

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
    // 监听 Post， 要监听任何实体，你只需省略listenTo方法并使用any，如:AnySubscriber.ts
    listenTo() {
        return Post;
    }

    async beforeInsert(event: InsertEvent<Post>) {
        event.entity.text = 'beforeInsert';
        console.log(event.entity.text)
    }

    async afterInsert(event: InsertEvent<Post>) {
        event.entity.text = 'afterInsert';
        console.log(event.entity.text)
    }
    
    async beforeUpdate(event: UpdateEvent<Post>) {
        event.entity.text = 'beforeUpdate';
        console.log(event.entity.text)
    }

}
