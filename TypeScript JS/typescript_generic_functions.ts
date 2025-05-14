/*A generic function is a function that works with any data type, but still remembers the type it works with.

Imagine a cookie cutter that can shape cookies of any flavor — chocolate, vanilla, etc.
A generic function is like that cookie cutter:
It doesn’t care what type it’s shaping — but it shapes correctly and consistently.
*/

//  A generic function to create a custom gift box with two items
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2]; //  Pack both items in a gift box (tuple)
  }
  
  // Customer 1: wants a box with a string and a number
  const giftBox1 = createPair<string, number>('Chocolates', 10);
  // giftBox1 is ['Chocolates', 10]
  // S = string, T = number
  
  console.log(giftBox1); // Output: ['Chocolates', 10]
  
  //  Customer 2: wants a box with a boolean and an array
  const giftBox2 = createPair<boolean, string[]>(true, ['Roses', 'Lilies']);
  // giftBox2 is [true, ['Roses', 'Lilies']]
  // S = boolean, T = string[]
  
  console.log(giftBox2); // Output: [true, ['Roses', 'Lilies']]
  
  //  Bonus: Let TypeScript guess the types (type inference)
  const giftBox3 = createPair('Book', { price: 20, author: 'John' });
  // S = string, T = { price: number, author: string }
  
  console.log(giftBox3); // Output: ['Book', { price: 20, author: 'John' }]