import { readFileSync } from 'fs';
import {treeLoader} from './treeLoader'
import { OpenDoorTree} from './openDoorTree'

var b3 = require('behavior3js')
console.log(b3.VERSION)


let treeLoaderObj = new treeLoader()
let openDoorTree = new OpenDoorTree()
openDoorTree.init(treeLoaderObj.loadAction.bind(treeLoaderObj), treeLoaderObj.loadCondition.bind(treeLoaderObj))
treeLoaderObj.init('guy', require('./demo.json'));

let guyTree = treeLoaderObj.getTree('guy');

console.log('**** Simulation start');
console.log('');
console.log('**** Lucky tries the door');
let lucky = {
  memory : new  b3.Blackboard(),
  happy: function(){
    console.log("call happy")
  }
}

lucky.memory.set('name', 'Lucky');

// tick(target, blackboard)
/* The target object has
* no use at all for all Behavior3JS components, but surely is important
* for custom nodes. 
*/
// 我们在action('walkToDoor')中的匿名函数中，就可以打印 tick.target
guyTree.tick(lucky, lucky.memory); 

console.log('');
console.log('**** Thief tries the door');
var thief = {
    memory:  new b3.Blackboard()
};
thief.memory.set('name', 'Thief');
thief.memory.set('locked', true);
thief.memory.set('lockpick-level', 8);

guyTree.tick(thief, thief.memory);

console.log('');
console.log('**** Thug tries the door');
var thug = {
    memory:  new b3.Blackboard()
};
thug.memory.set('name', 'Thug');
thug.memory.set('locked', true);
thug.memory.set('lockpick-level', 2);

guyTree.tick(thug, thug.memory);
console.log('');
console.log('**** Simulation complete');