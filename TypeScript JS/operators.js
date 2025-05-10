/* An operand – is what operators are applied to. 
For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. 
*/

//An operator is unary if it has a one single operand.
let x = 1;
x = -x;
alert( x ); // -1, unary negation was applied

//An operator is binary if it has two operands. 
let z = 1, y = 3;
alert( y - z ); // 2, binary minus subtracts values

//maths
console.log(2**3) //8, exponential
console.log("My city " + "Munich") // My city Munich
console.log(2+3+"0") //50
console.log(-true) //-1

let a = 10, b = 20;
let c = 30 - (a = b + 1); // c = 9, since a becomes 21
console.log("c = " + c)

let a1 = 1, b1 = 1;
alert( ++a1 ); // 2, prefix form returns the new value
alert( b1++ ); // 1, postfix form returns the old value
alert( a1 ); // 2, incremented once
alert( b1 ); // 2, incremented once
