//String Conversion
let age = 10;
console.log(typeof age); //number
age = String(age);
console.log(typeof age); //string

//Number conversion
let age2 = "10";
console.log(typeof age2); //string
age2 = Number(age);
console.log(typeof age2); //number

let age3 = Number("an arbitrary string instead of a number");
alert(age3); // NaN, conversion failed

//Boolean
/*
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true. 
*/
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false