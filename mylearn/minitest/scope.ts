let a = 1;
if(a){
    var b = 0; 
}

console.log(b)  // output: 0，因为 用var定义的变量，作用域是由函数申请的而不是代码块。 如果使用let b，那么这里会报错