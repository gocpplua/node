import { readFileSync } from 'fs';
var b3 = require('behavior3js')

console.log(b3.VERSION)

let demoJson = readFileSync(__dirname + '/demo.json', 'utf8')

import * as treeLoader from './treeLoader'
treeLoader.init();

let ai = treeLoader.ai;


console.log('**** Lucky tries the door');
let lucky = {
  memory : new  b3.Blackboard(),
  aa: 1
}

lucky.memory.set('name', 'Lucky');

// tick(target, blackboard)
/* The target object has
* no use at all for all Behavior3JS components, but surely is important
* for custom nodes. 
*/
// 我们在action('walkToDoor')中的匿名函数中，就可以打印 tick.target
ai.get('guy').tick(lucky, lucky.memory); 

console.log('**** Thief tries the door');
var thief = {
    memory:  new b3.Blackboard()
};
thief.memory.set('name', 'Thief');
thief.memory.set('locked', true);
thief.memory.set('lockpick-level', 8);

ai.get('guy').tick(thief, thief.memory);