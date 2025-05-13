let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); //// Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

let x: any =  true
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


//ANY vs UNKOWN vs NEVER
/*
any – "I don’t care what the value is. Let me do anything."
unknown – "I don’t know what the value is. Let me check first before I use it."
*/

let data: any;
data = 1;
data.toUpperCase(); //does not make sense, but no error since "any" turns off TypeScript's safety checks.

let data2: unknown;
data2 = "hello";
data2.toUpperCase(); // you cant directly use this, Error: data is unknown
//you must check the type first
if(typeof data2==="string")
{
    console.log("data is string")
}

//NEVER represents a value that doesn't exist. A function or variable with type never never returns or holds anything.
function throwError(message: string): never {
    throw new Error(message); // Never returns
  }
throwError(); 