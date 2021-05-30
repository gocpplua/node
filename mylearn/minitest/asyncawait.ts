// 理解 JavaScript 的 async/await: https://segmentfault.com/a/1190000007535316
// [阮一峰]async 函数的含义和用法: http://www.ruanyifeng.com/blog/2015/05/async.html
function delay(){
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log("delay promise")
            resolve("delay")
        }, 5000); 
    }
       
    )
}

delay().then(v =>{
    console.log(v)
})


function delay1(){
    return new Promise(resolve=>{
        console.log("delay1 promise")
        setTimeout(()=>resolve("delay1"), 5000); 
    })
}

async function test1() {
    const v = await delay1()
    console.log(v)
}

test1()


function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test2() {
    const v = await takeLongTime();
    console.log(v);
}

test2();



function delay3(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("delay3")
        }, 1000)
        
    })
}
delay3().then(v =>{
    console.log(v)
})


function delay4(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("delay4")
        }, 100)
        
    })
}

async function test4() {
    let v = await delay4()
    console.log(v)
}

test4();

