/* 
Higher-order functions either operate on other functions or return a new function as a result.
*/

//Here, apply is a higher-order function because it takes double (a function) as an argument.
function apply(fn, val) {
    return fn(val);
  }
  function double(x) {
    return x * 2;
  }
  console.log(apply(double, 5));

  // 3 high order functions:

  // (1) Map:creates a new array with the results of applying a provided function to every element of the array.
  const myNumbers = [1,3,5,7]
  const doubled = numbers.map(num => num*2)
  console.log(doubled) //[2, 6, 10, 14] 

  // (2) Filter: creates a new array with all elements that pass the test implemented by the provided function (i.e., it filters out unwanted values).
  const numbers2 = [1, 2, 3, 4, 5];
  const evenNumbers = numbers2.filter(num => num % 2 === 0);
  console.log(evenNumbers); // [2, 4]

  // (3) Reduce: applies a function to each element in the array to reduce it to a single output value, such as a sum or product.
  const numbers3 = [1, 2, 3, 4, 5];
  const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // 15