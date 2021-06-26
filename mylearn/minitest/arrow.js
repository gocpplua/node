function Person(age){
  this.age = age;
  console.log(this)
  this.growOld = function(){
    console.log(this)
    this.age++;
    console.log(this)
  }
}

var person = new Person(1)
setTimeout(person.growOld, 1000); 


setTimeout(function(){
  console.log(person.age);
}, 2000)

console.log('--------')
person.growOld();
console.log('--------')