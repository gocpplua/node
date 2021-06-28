function myreserve<T>(items: T[]){
  const toreturn = []
  for(let i = items.length - 1; i >= 0; i--){
    toreturn.push(items[i])
  }
  return toreturn;
}

const sample = [1, 2, 3]
let reversed = myreserve(sample)
console.log(reversed)