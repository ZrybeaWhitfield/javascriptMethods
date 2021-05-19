function mostOccuring(words){
  let arr = words.split('')
  let map = new Map()
  for(let i =0; i< arr.length; i++){
    let counter = 1
    if(map.has(arr[i])){
      counter = map.get(arr[i]) + 1
    }
    map.set(arr[i], counter)
  }

  let values = Array.from(map.values()).sort((a,b)=> b - a)
 return values[0]

}

console.log(mostOccuring("bookstore"));
