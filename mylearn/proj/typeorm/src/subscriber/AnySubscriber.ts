import {EntitySubscriberInterface, EventSubscriber, InsertEvent} from "typeorm";

@EventSubscriber()
export class AnySubscriber implements EntitySubscriberInterface {
  /**
   * 在实体插入之前调用。监听任何实体
   */
  beforeInsert(event: InsertEvent<any>) {
    console.log(`BEFORE ENTITY INSERTED: `, event.entity);
  }
}