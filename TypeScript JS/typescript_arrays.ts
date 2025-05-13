let name2: string[] = [];
name2.push(true)

console.log(name2) //error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

//The readonly keyword can prevent arrays from being changed.
let name3: readonly string[]= []
name3.push("Dave") //Error: Property 'push' does not exist on type 'readonly string[]'.

//TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
