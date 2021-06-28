function add(a: number):void;
function add(a: number, b: number):void;
function add(a: number, b: number, c: number, d: number):void;
function add(a: number, b?: number, c?: number, d?: number):void{
  console.log(a);
}

add(1);
// add(1,2,3); // error
add(1,2,3,4)