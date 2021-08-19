var fs=require('fs')
var b3 = require('behavior3js')

console.log(b3.VERSION)

fs.readFile(__dirname + '/demo.json','utf8',function (err: any, data: any) {
  if(err) console.log(err);
  var test1=JSON.parse(data);//读取的值

  var tree = new b3.BehaviorTree(); 
  tree.load(test1)
  console.log('-----------tree----------------')
  console.log(tree.dump())
  
  console.log('-----------tick----------------')
  var blackboard = new b3.Blackboard();
  blackboard.set('var1', 'value', 'tree1');
  var target = {}
  
  console.log(tree.tick(target, blackboard))
});

