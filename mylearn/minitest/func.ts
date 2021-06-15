class Manage{
  public test(data: any){
    console.log(data)
  }
}

let manage = new Manage();

for(let i in manage){
  if(typeof (manage as any)[i] === 'function'){
    console.log('function') // 这行这里
  }
  else{
    console.log(typeof i) 
  }
}

manage.test('2');
manage['test']('3');