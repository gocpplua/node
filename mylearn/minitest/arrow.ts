class Person{
  constructor(public age: number){

  }

  growOld = () => {
    this.age++
  }
}

let person = new Person(1)
setTimeout(person.growOld, 1000); 


setTimeout(function(){
  console.log(person.age);
}, 2000)
