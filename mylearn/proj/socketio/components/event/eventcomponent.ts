import { IComponent } from '../IComponent';
export class Event implements IComponent{
  constructor(){
    console.log('Event constructor');
  }
  name: string = '__event__';
  beforeStart?: (cb: () => void) => void;
  afterStart?: (cb: () => void) => void;
  afterStartAll?: () => void;
  stop?: (force: boolean, cb: () => void) => void;
  start(cb?: () => void){
    console.log("Event start");
    if(typeof cb === 'function'){
      cb();
    }

  }
}