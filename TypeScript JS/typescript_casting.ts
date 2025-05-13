//Casting is the process of overriding a type.

let a: unknown = 'Hello';
console.log((a as string).length)
console.log((a as number).length) //error: Property 'length' does not exist on type 'number'.

//Force casting: To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let x = 'hello';
console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined

