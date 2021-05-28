import { Application } from "./application";
import { Event } from "./components/event/eventcomponent";

export class XRArk{
  app_:Application;

  components_ = {
    event : Event,
    event1 : Event,
  }

};

let gXRArk = new XRArk();
gXRArk.app_ = new Application();


gXRArk.app_.load(gXRArk.components_.event)
gXRArk.app_.load(gXRArk.components_.event1) // output:ignore duplicate component: "event"

gXRArk.app_.loaded.forEach(element => {
  (element as any)["start"](()=>{
    console.log('1')
  });
});

if (typeof (gXRArk.app_.loaded[0] as any)["start"] === 'function') {
  (gXRArk.app_.loaded[0] as any)["start"](()=>{
    console.log('2')
  });
}


if(typeof gXRArk.app_.components["event"]["start"] === 'function'){
  gXRArk.app_.components["event"]["start"](()=>{
    console.log('3')
  });
}