// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
const mymodule = {
  x: 42,
  getX: function(y) {
    console.log(y)
    return this.x;
  }
};

const mymodule1 = {
  x: 43,
  getX: function(y) {
    console.log(y)
    return this.x;
  }
};

const unboundGetX = mymodule.getX;

// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
const boundGetX = unboundGetX.bind(mymodule, 1);
console.log(boundGetX(10)); // 这个函数this 就是 mymodule， 参数y 就是 1,而不是10. 因为只要将这些参数（如果有的话）作为 bind() 的参数写在 this 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。
// expected output: 42

const boundGetX1 = unboundGetX.bind(mymodule1, 2);
console.log(boundGetX1()); // 由于bind了 mymodule1，所有 boundGetX 默认的第一个参数就是 mymodule1，getX函数的this就是mymodule1
// expected output: 43


console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined
