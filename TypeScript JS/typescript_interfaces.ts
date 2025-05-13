//An interface is like a blueprint for an object. It tells TypeScript: "This object should have these properties with these types."

interface Person {
    name: String,
    age: number
}

let user: Person = {
    name: 100, //error: Type 'number' is not assignable to type 'String'.
    age:20
}

let user2: Person = {
    name: "Dave", 
    age:20
}

//You can have "Index Signature" using this concept.