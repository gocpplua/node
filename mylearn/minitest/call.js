// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
function Product(name, price) {
  console.log(this) // output: Food { category: 'food' }
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  this.category = 'food';
  Product.call(this, name, price); // call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。所有 Product 中的 this 就是 Food的this
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"



function Product1(name, price) {
  this.name = name;
  this.price = price;
  console.log(this) // output: Product1 对象
}

function Food1(name, price) {
  this.category = 'food';
  Product1(name, price);
}

console.log(new Food1('cheese', 5).name);
// expected output: "undefined"


var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
