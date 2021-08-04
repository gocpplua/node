import {Post} from "../entity/Post";
import {EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent} from "typeorm";

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
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
