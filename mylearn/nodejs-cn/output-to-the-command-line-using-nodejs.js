// count 方法会对打印的字符串的次数进行计数，并在其旁边打印计数：
const x = 1
const y = 2
const z = 3
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'x 的值为 ' + x + ' 且已经检查了几次？'
)
console.count(
  'y 的值为 ' + y + ' 且已经检查了几次？'
)


const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

console.log('------ 测试trace ------')

const function2 = () => console.trace()
const function1 = () => function2()
function1()

console.log('------ console.time (note:time里面的字符串需要一致) ------')
const doSomething = () => console.log('测试')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //做点事，并测量所需的时间。
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

console.error('------ console.err ------')

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 1000)
