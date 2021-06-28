function add(a: number);
function add(a: number, b: number);
function add(a: number, b: number, c: number, d: number);
function add(a: number, b?: number, c?: number, d?: number){
  console.log(a);
}

add(1);
// add(1,2,3); // error
add(1,2,3,4)