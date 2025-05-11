/*
A transpiler is a special piece of software that translates source code to another source code. 
It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
*/

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

/* 
If there are new functionality like "math.trunc", old JS compilers cannot understand it. 
A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations. 
*/
if (!Math.trunc) { // if no such function
    // implement it
    Math.trunc = function(number) {
      // Math.ceil and Math.floor exist even in ancient JavaScript engines
      // they are covered later in the tutorial
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
  }

