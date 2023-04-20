let a = 1;
let b = 2;
let c = 4;
console.log(b > a && b < c);


let x = 1;
let y = 2;

let res1 = String(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = y > x;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x % String(y > x);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""


let isAdult = prompt("Скільки вам років?");
isAdult >= 18 ? alert("Ви досягли повнолітнього віку") : alert("Ви ще надто молоді");


let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let counter = new Map();
let data = [];
arr.forEach(element => counter.has(element) ? counter.set(element, counter.get(element) + 1) : counter.set(element, 1));
data.push(Array.from(counter.keys()).find(element => counter.get(element) === Math.max(...counter.values())));
arr = arr.filter((element) => {return element != data[0]});
console.log(arr); // [4, 2, 1, 6, 3, 2]


let sides = [];
while (sides.length < 3){
    let side = +prompt("Enter side");
    typeof side != NaN && side > 0 ? sides.push(side) : alert("Incorrect data");
}
sides.sort((a,b) => a - b)
let semiPerimeter = (sides[0] + sides[1] + sides[2]) / 2;
let area = Math.sqrt(semiPerimeter * (semiPerimeter - sides[0]) * (semiPerimeter - sides[1]) * (semiPerimeter - sides[2])).toFixed(3);
console.log(`S = ${area}`);
let isRight = sides[2] * sides[2] === sides[0] * sides[0] + sides[1] * sides[1];
console.log(isRight ? "Трикутник прямокутний" : "Трикутник не прямокутний");


let today = new Date();
let hour = today.getHours();
hour >= 5 && hour < 11
  ? alert("Good morning")
  : hour >= 11 && hour < 17
  ? alert("Good afternoon")
  : hour >= 17 && hour < 23
  ? alert("Good evening")
  : alert("Good night");

switch (true) {
    case hour >= 5 && hour < 11:
      alert( 'Good morning' );
      break;
    case hour >= 11 && hour < 17:
      alert( 'Good afternoon' );
      break;
    case hour >= 17 && hour < 23:
      alert( 'Good evening' );
      break;
    default:
      alert( "Good night" );
  }
  