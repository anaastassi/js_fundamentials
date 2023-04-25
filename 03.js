// 1
function createArray(start, stop) {
  let array = [];
  for (let i = start; i <= stop; i++) {
    array.push(i);
  }
  return array;
}
let arr = createArray(2, 9);
console.log(arr);

// 2
let a = 2;
let b = 7;
let result = [];
let count = 1;
for (let i = a; i <= b; i++) {
  for (let n = 1; n <= count; n++) {
    result.push(i);
  }
  count++;
}
console.log("" + result);

// 3
function randArray(k) {
  let array = [];
  for (let i = 1; i <= k; i++) {
    array.push(Math.floor(Math.random() * (500 - 1) + 1));
  }
  return array;
}
console.log(randArray(5));

// 4
function compact(array) {
  let arraySet = new Set(array);
  return Array.from(arraySet);
}
const array = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(array);
console.log(arr2);

// 5
function createTypedArrays(arr) {
  let collection = new Map();
  openArray(arr);
  function openArray(arr) {
    arr.forEach((element) =>
      Array.isArray(element) ? openArray(element) : arrayDivide(element)
    );
  }
  function arrayDivide(element) {
    collection.has(typeof element)
      ? collection.set(
          typeof element,
          collection.get(typeof element).concat(element)
        )
      : collection.set(typeof element, Array.of(element));
  }
  return Array.of(...collection.values());
}
let arr1 = [
  5,
  "Limit",
  12,
  [1111, 2222, ["third level", 8888], "second level"],
  "a",
  "3",
  99,
  2,
  "strong",
  "broun",
  true,
];

let arrNew = createTypedArrays(arr1);
console.log(arrNew);

// 6
function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}
console.log(calc(10, 3, 1));

// 7
function findUnique(arr) {
  let uniqSet = new Set(arr);
  return Array.from(uniqSet).toString() === arr.toString();
}
console.log(findUnique([1, 1]));
