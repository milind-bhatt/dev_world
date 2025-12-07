//Currying transforms a function that takes multiple arguments into a series of functions that each take one argument.
function add(a) {
    return function(b) {
      return a + b;
    };
  }
  console.log(add(2)(3)); // 5