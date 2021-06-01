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

console.log("``````````````````gXRArk.app_.components_````````````````````")
Object.keys(gXRArk.app_.components).forEach(key => {
  console.log(key)
})

console.log("``````````````````gXRArk.components_````````````````````")
console.log(typeof gXRArk.components_)
Object.keys(gXRArk.components_).forEach(key => {
  console.log(key)
  gXRArk.app_.load(gXRArk.components_[key])
})

console.log("``````````````````load````````````````````")

gXRArk.app_.load(gXRArk.components_.event)
gXRArk.app_.load(gXRArk.components_.event1) // output:ignore duplicate component: "event"

console.log("```````````````````1```````````````````")

gXRArk.app_.loaded.forEach(element => {
  (element as any)["start"](()=>{
    console.log('1')
  });
});

console.log("```````````````````2```````````````````")
if (typeof (gXRArk.app_.loaded[0] as any)["start"] === 'function') {
  (gXRArk.app_.loaded[0] as any)["start"](()=>{
    console.log('2')
  });
}

console.log("```````````````````3```````````````````")

if(typeof gXRArk.app_.components["__event__"]["start"] === 'function'){
  gXRArk.app_.components["__event__"]["start"](()=>{
    console.log('3')
  });
}
