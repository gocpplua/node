const doSomethingAsync = () =>{
    return new Promise(
        resolve => {
            setTimeout(() => resolve('做点事情'), 1000)
        }
    )
}

const doSomethingAsync1 = () =>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('做点事情 - 另一种写法')
        }, 1000)
    }
    )
}

const doSomething = async() => {
    console.log(await doSomethingAsync())
}

const doSomething1 = async function(){
    console.log(await doSomethingAsync1())
}

console.log('之前')
doSomething()
doSomething1()
console.log('之后')


const aFunction = async() => {
    return "1111"
}

const aFunction1 = async() => {
    return Promise.resolve("2222") // 等同于: aFunction
}



aFunction().then((data)=>{
    console.log(data)
})

aFunction1().then((data)=>{
    console.log(data)
})