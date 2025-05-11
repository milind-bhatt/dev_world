/* 
PART OF OBJECT.JS
When a function is executed with new, it does the following steps:
-A new empty object is created and assigned to this.
-The function body executes. Usually it modifies this, adds new properties to it.
-The value of this is returned.
*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");

  console.log(user.name); // Jack
  console.log(user.isAdmin); // false

  function Car(maker) {
    this.maker = maker;
    this.price = "€50000";
  }

  let car = new Car("BMW");
  console.log(car.price); // €50000

  //"return" overrides "this" by returning an object
  function Fruits(taste)
  {
    this.taste = "Sweet";
    return {taste: "Bitter"}
  }
  let fruitTaste = new Fruits()
  console.log(fruitTaste.taste) //gives Bitter

  //methods inside constructor
  function Stock(stockPrice)
  {
    this.findPrice = function()
    {
        console.log("Stock price is " + stockPrice)
    }
  }

  let price = new Stock("23");
  price.findPrice()


  //example calculator

function Calculator()
{
  this.read = function()
  {
    //here +prompt is used to convert string entered by user to number, since numbers entered via browser prompts are string datatype.
    this.a = +prompt('a?',0)
    this.b = +prompt('b?',0)
  }
  this.sum = function()
  {
    return this.a + this.b
  }     
}

let calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );

//ask multiple values and add them to an initial value, 1 in this case
function Accumulator(startingValue)
{
    this.value = startingValue;
    this.read = function()
        {
            this.value = this.value + (+prompt('What values to add? ', 0))
        }
}
let accumulator = new Accumulator(1); // initial value 1
//will ask user values 2 times
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
