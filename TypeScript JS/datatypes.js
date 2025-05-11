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

//Arrays
let fruits = ["Apple", "Orange", "Plum"];

fruits[0]; //Apple
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
fruits.length; //4
fruits.at(-1) //Lemon, last element of array
fruits.pop() //removes Lemon
fruits.push("Pear"); //add Pear at end of list
fruits.shift() // remove Apple (first element)
fruits.unshift('Watermelon') //adds Watermelon to start of list

// modify the array by reference
let fruits = ["Banana"]
let arr = fruits; 
arr.push("Pear");
console.log(fruits) // Banana, Pear

//Performance: 
//Methods push/pop run fast, while shift/unshift are slow

//Loops
let cars = ["BMW","FORD","MERCEDES","TATA"]
for(let i = 0; i<cars.length; i++)
{
  console.log(cars[i])
}

//Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log( matrix[0][0]);

//add "Rock-n-Roll" in end and remove middle element from array and replace with "Classics"
let styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length-1)/2)] = "Classic"
console.log(styles)