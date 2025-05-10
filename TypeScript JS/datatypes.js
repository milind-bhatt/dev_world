/*
JS has 7 primitive data types (can hold only single value), 8th is object
Number
String
Boolean
"Null"
undefined
bigInt
symbol

object
 */

// bigInt => In JavaScript, the “number” type cannot safely represent integer values larger than (253-1). A BigInt value is created by appending n to the end of an integer
const bigInt = 1234567890123456789012345678901234567890n;

//Symbol => Represents a unique and immutable value, often used as object property keys.
const person = {};
const secret = Symbol("secret");

person.name = "Bob";
person[secret] = "This is hidden data";

//now if someone loops through person, only name is printed
for (let key in person) {
  console.log(key);  // Only "name" is printed
}


//Objects
let car = {
    color: "Black",
    make: "BMW"
};
console.log(car.make)

//typeOf => finds type of vaiable
console.log(typeof(car)) //object
console.log(typeof(true)) //boolean


