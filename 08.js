//1
function upperCase(string){
    let regexp = new RegExp('^[A-Z]');
    return regexp.test(string) ? "String starts with an uppercase character": "String does not start with an uppercase character";
}
console.log(upperCase('regexp'));
console.log(upperCase('Regexp'));

//2
function checkEmail(string){
    let regexp = /^[\w\-\.]+@[A-Za-z]+\.[A-Za-z]+$/;
    return regexp.test(string);
}
console.log(checkEmail("Qmail2@gmail.com"));

//3 
let regExp = /(\w+)\s(\w+)/;
let str = 'Java Script';
let replacedStr = str.replace(regExp, '$2, $1');
console.log(replacedStr)

//4
function checkCard(cardNumber){
    let regexp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regexp.test(cardNumber);
}
console.log(checkCard('0099-8899-7865-5643'));
console.log(checkCard('0099-88997865-5643'));

//5
function emailCheck(string){
    let regexp = /^[A-Za-z\d][\dA-Za-z\_]*\-?[\dA-Za-z\_]*\@{1}[A-Za-z]+\.{1}[A-Za-z]+$/;
    return regexp.test(string) ? "Email is correct!" : "Email is not correct!";
}
console.log(emailCheck('my_mail@gmail.com'));
console.log(emailCheck('#my_mail@gmail.com'));
console.log(emailCheck('my_ma--il@gmail.com'));
console.log(emailCheck('my_55mR-8ail@gmail.com'));

//6
function checkLogin(string){
    let regexp = /^(?=.{2,10}$)[A-Za-z]+([A-Za-z0-9]*((?<=\d)\.)?[0-9]+)*$/;
    let searchRegExp = /\d+(\.\d+)?/g;
    console.log(string.match(searchRegExp))
    return regexp.test(string);
}
console.log(checkLogin('ee1.1ret3'));
//1.1, 3

console.log(checkLogin('ee1*1ret3'));
//1, 1, 3
