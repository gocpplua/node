// 参考实例；https://gitlab.com/scion-scxml/scion/-/tree/main/projects/libraries/scxml
const scxml = require('@scion-scxml/scxml'); 

let docPath = __dirname + '/demo.scxml';
scxml.pathToModel(docPath, function(err:any, model:any){
  if(err) throw err;
  model.prepare(function(err: any, fnModel: any){
    if(err) throw err;
    let sc = new scxml.core.Statechart(fnModel, {}) // 实例化解释器

    var actualInitialConf = sc.start(); //启动解释器
    console.log('initialConfiguration', actualInitialConf);  // 输出当前状态:intact

    var nextConfig = sc.gen({name:"staked"});  // 输出当前状态:torpor
    console.log("nextConfig",nextConfig);
  })
});