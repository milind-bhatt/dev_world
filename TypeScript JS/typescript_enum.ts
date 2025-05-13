/* An Enum (short for enumeration) is a way to define a set of named constant values. Think of it like a list of options — each with a clear name and a value behind it.
Why Use Enums?
Avoid magic strings or numbers
Code is easier to read and maintain
Safe and consistent values
*/

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  let today: Day = Day.Monday;
  console.log(today); // Output: 0, because by default, Monday = 0, Tuesday = 1...

//You can change numbers
enum Day2 {
    Monday = 1,
    Tuesday,     // 2
    Wednesday,   // 3
    Thursday,    // 4
  }
let today2: Day2 = Day.Monday;
console.log(today2); // Output: 1

//Strings
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
  }
  
  let c: Color = Color.Green;
  console.log(c); // Output: "GREEN"

  //Example
  enum OrderStatus {
    Pending = "Order is pending",
    Shipped = "Order is shipped"
}

function printStatus(status:OrderStatus) {
    console.log(status)
}

printStatus(OrderStatus.Pending) //"Order is pending" 
