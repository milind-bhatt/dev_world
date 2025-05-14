/*In TypeScript, keyof is used to get the keys (property names) of a type.
Its like asking: "What are the property names of this object?"
*/

type Person = {
    name: string;
    age: number;
  };
  
  type PersonKeys = keyof Person;
  console.log(PersonKeys)