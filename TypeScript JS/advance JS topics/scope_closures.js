//Scope defines where variables are accessible in your code.

function demo1()
{
    let b = "Hie!!";
    console.log(b)
}
demo1()
console.log(b) //error since b is not in global scope

//closure: 
//A closure is when a function remembers the variables from its lexical scope even when it's called outside that scope.
function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    }
  }
  
  const counter = outer();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  //Here, inner() remembers count even after outer() has finished executing — this is a closure.
  
  function mainFunction()
  {
    let a = 0;
    
    return function b()
    {
        a++;
        console.log(a)
    }
  }

  const d = mainFunction()
  d()