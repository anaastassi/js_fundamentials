console.log("Olkhovyk");

let variable1 = 1;
let variable2 = 2;
alert(`${variable1} , ${variable2}`);

variable1 = variable2;
alert(`${variable1} , ${variable2}`);

let object = new Object();
object.String = "string";
object.Number = 1;
object.Boolean = true;
object.Undefined;
object.Null = null;

console.log((isAdult = window.confirm("Are you over 18 years old?")));

let firstName = "Anastasiia";
let lastName = "Olkhovyk";
let group = "js fundamentials";
let yearOfBirth = 1999;
let isMarried = false;
let color;
let nationality = null;
console.log(`Number: ${yearOfBirth}`);
console.log(`Boolean: ${isMarried}`);
console.log(`String: ${firstName}, ${lastName}, ${group}`);
console.log(typeof color, typeof nationality);

let login = prompt("Enter your login");
let email = prompt("Enter your email");
let password = prompt("Enter your password");
alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

const hour = 60 * 60;
const day = hour * 24;
const month = day * 30;
alert(`Seconds in an hour: ${hour}
Seconds in a day: ${day}
Seconds in a month: ${month}`);
