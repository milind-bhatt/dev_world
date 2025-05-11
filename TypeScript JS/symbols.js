//A “symbol” represents a unique identifier. It is a “primitive unique value” with an optional description.

// id is a symbol with the description "id"
let id = Symbol("id");

//Symbols are special. They don’t auto-convert.
let myName = Symbol("name")
console.log(myName) //TypeError: Cannot convert a Symbol value to a string
console.log(myName.toString()); // Now it works

//why to use Symbols? To safeguard variable values, especially if they belong to someone else
let car = {
    name: "BMW",
    id: 100  // this might already be in use
  };

  // You add your own "id" field
  car.id = 200; // ❌ Overwrites the existing one
  console.log(car.id); // 200 (original value lost)

  //Use Symbol
  let car2 = {
    name: "BMW",
    id:100
  }
  let myId = Symbol("id")
  car2[myId] = 200
  
  console.log(user.id);      // 100 (unchanged)
  console.log(user[myId]);   // 200 (your own hidden ID)


