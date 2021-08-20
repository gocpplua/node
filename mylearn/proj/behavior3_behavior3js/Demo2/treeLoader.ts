var b3 = require('behavior3js')

import { OpenDoorTree} from './openDoorTree'

export class treeLoader{
  private customNode: Object = {}
  private  ai: Map<string, any> = new Map()

  private loadNode(name: string, properties: object, type: string){
    let node = b3.Class(type)
    let nodeProto = node.prototype
    nodeProto.name = name;
    for (const prop in properties) {
      nodeProto[prop] = (properties as any)[prop];
    }
    (this.customNode as any)[name] = node;
    return node;
  }

  public loadAction(name:string, properties: object){
    return this.loadNode(name, properties, b3.Action)
  }

  public loadCondition(name:string, properties: object){
    return this.loadNode(name, properties, b3.Condition)
  }

  public init(treename: string, jsonObj: Object){
    this.ai.set(treename, new b3.BehaviorTree())
    this.ai.get(treename).load(jsonObj, this.customNode)
  }

  public getTree(treeName: string){
    return this.ai.get(treeName)
  }
}