/*
let firstName = "Philip";
let lastName = "Tawfeek";

console.log(firstName);
console.log(lastName);

let age = 11;
console.log(age); // outputs 11 to the console

age = 54;

console.log(age); // what will be output now?
const pi = 3.14;


console.log(pi); // What will be output?

console.log(20+33);

let a = 10;
console.log(a);

let b = 7 * a;
console.log(b);
*/

function add7(number){
    return number + 7;
}
console.log(add7(10));

function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(3, 2));

function capitaliz(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitaliz("a7a"));
console.log(capitaliz("baba"));

function lastLetter(str){
    if(!str) return "";
    return str.slice(-1);
}
console.log(lastLetter("skate"));
console.log(lastLetter("baba"));