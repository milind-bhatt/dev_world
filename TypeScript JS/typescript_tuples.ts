// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

//incorrct
ourTuple = [5, "false", 'Coding God was here']; //Error: Type 'string' is not assignable to type 'boolean'.

//read only tuples
let ourNewTuple: readOnly [string, number, boolean] = ["India", 10, false];
ourNewTuple.push('Hello') //error: Property 'push' does not exist on type 'readonly [string, number, boolean]'.