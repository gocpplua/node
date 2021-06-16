let Plays: Map<string, number> = new Map<string, number>();
Plays["1"] = 1;
Plays["2"] = 2;
Plays.set("3", 3);
Plays.forEach((value, key, Plays)=>{
  console.log(value, key); // output: 3 3
})

for(let i in Plays){
  console.log(i) // output: 1 2
}