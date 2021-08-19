var b3 = require('behavior3js')
let tree = {}
let ai: Map<string, any> = new Map()


function loadNode(name: string, properties: object, type: string){
  let node = b3.Class(type)
  let nodeProto = node.prototype
  nodeProto.name = name;
  for (const prop in properties) {
    nodeProto[prop] = (properties as any)[prop];
  }
  (tree as any)[name] = node;
  return node;
}

function loadAction(name:string, properties: object){
  return loadNode(name, properties, b3.Action)
}

function loadCondition(name:string, properties: object){
  return loadNode(name, properties, b3.Condition)
}

import * as openDoorNodes from './openDoorNodes'
function init(){
  openDoorNodes.init(loadAction, loadCondition);
  ai.set('guy', new b3.BehaviorTree())

  ai.get('guy').load(require('./demo.json'), tree)
}


export {ai}
export {init};