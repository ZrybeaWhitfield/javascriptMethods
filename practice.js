let obj = {}

obj.color //expression evaluates


obj.color = "green"

console.log(obj);
let a = []
a[0] = "green"


obj["color"] = "red"
obj["weight"] = 4
console.log(obj);

let propertyName = "height"
let propertyValue = 6.2

obj[propertyName] = propertyValue
obj.propertyName = 5.3
console.log(obj);

let arr = ["white", "goodness"]

obj[arr[0]] = arr[1]


let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

let obj = Array.from(map).reduce((obj, [key, value]) => (
  Object.assign(obj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
), {});

console.log(obj);
