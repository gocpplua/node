var b3 = require('behavior3js')

import { OpenDoorNodes} from './openDoorNodes'

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

  private loadAction(name:string, properties: object){
    return this.loadNode(name, properties, b3.Action)
  }

  private loadCondition(name:string, properties: object){
    return this.loadNode(name, properties, b3.Condition)
  }

  public init(){
    let openDoorNodes = new OpenDoorNodes()
    openDoorNodes.init(this.loadAction.bind(this), this.loadCondition.bind(this));
    this.ai.set('guy', new b3.BehaviorTree())
    this.ai.get('guy').load(require('./demo.json'), this.customNode)
  }

  public getTree(treeName: string){
    return this.ai.get(treeName)
  }
}