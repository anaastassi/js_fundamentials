//1 
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let {first : f, third : x , fifth = "Name №5"} = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

//2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let {
    names : [,name2,,name4],
    ages : [,age2,,age4]}
 = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//3
function mul(...params) {
    let result = 1;
    let filtered = [...params].filter(element => typeof element === 'number');
    for (let i = 0; i < filtered.length; i++) { 
        result *= filtered[i]
      }
    return filtered.length === 0 ? 0 : result
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0

 //4
function mapBuilder (keysArray, valuesArrays){
    let map = new Map();
    let i = 0;
    keysArray.forEach(element => {
        map.set(keysArray[i],valuesArrays[i]);
        i++
    });
    return map;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

//5

var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] =  closure(i) 
}
function closure(i){
    return function(){
        console.log(i)
    }
}

arr[0](); // 0
arr[arr.length - 1](); // 2