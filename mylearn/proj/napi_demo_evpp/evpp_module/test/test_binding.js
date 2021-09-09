const EvppModule = require("../dist/binding.js");
const assert = require("assert");

assert(EvppModule, "The expected module is undefined");

function testBasic()
{
    const instance = new EvppModule("mr-yeoman");
    assert(instance.greet, "The expected method is not defined");
    assert.strictEqual(instance.greet("kermit"), "mr-yeoman", "Unexpected value returned");
}

function testInvalidParams()
{
    const instance = new EvppModule();
}

assert.doesNotThrow(testBasic, undefined, "testBasic threw an expection");
assert.throws(testInvalidParams, undefined, "testInvalidParams didn't throw");

console.log("Tests passed- everything looks OK!");

setInterval(()=>{
    const instance = new EvppModule("cc");
    instance.greet("chenqi")
}, 5000)