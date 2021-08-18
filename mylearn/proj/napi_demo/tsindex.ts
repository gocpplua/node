import * as  test  from './addons/testaddon'

console.log('====', test)
console.log(test.hello())
console.log(test.add(1 ,2))

let example = new test.ClassExample(1);
console.log(example.getValue())

example.add(22);
console.log(example.getValue())