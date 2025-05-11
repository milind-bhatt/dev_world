class getPrice {
    constructor(discount) {
        let totalPrice = 100
        this.discount = totalPrice - discount
    }
    sayDiscount() {

        console.log(this.discount)
    }
}

let prices = new getPrice("20")
prices.sayDiscount()

//extends
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class (inherits from Animal)
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // call parent constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks. (${this.breed})`);
    }
}
// Create a Dog object
let myDog = new Dog("Buddy", "Labrador");
myDog.speak();

//Class fields, which  is a syntax that allows to add any properties.
class User {
    name = "Dave"

    sayHello() {
        console.log("Hello " + this.name)
    }
}
new User().sayHello()

//example of EXTENDS and how it affects child class

class Animal {
    name = 'animal';
    constructor() {
        console.log(this.name); // (*)
    }
}
class Rabbit extends Animal {
    name = 'rabbit';
}
new Animal(); // animal
new Rabbit(); // animal -- why animal and not rabbit? Because In JavaScript, class fields (like name = 'rabbit') are set after the super() constructor call finishes.


// ! to solve above, If you want Rabbit's name to be used early, you need to pass it through the constructor, like this:
class Animal {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
}
class Rabbit extends Animal {
    constructor() {
        super("rabbit");
    }
}
new Rabbit(); // rabbit 


//class checking: instanceof => check whether an object belongs to a certain class
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true


/*
JS Mixins => A mixin is a reusable object that contains methods you can add to any class.
It’s like copy-pasting useful code into different classes. 
*/
let sayHiMixin = {
    sayHi() {
      console.log(`Hi, ${this.name}`);
    },
    sayBye() {
      console.log(`Bye, ${this.name}`);
    }
  };
  
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Copy the methods from sayHiMixin into User.prototype
  Object.assign(User.prototype, sayHiMixin);
  
  let user = new User("Aarya");
  user.sayHi();  // Hi, Aarya
  user.sayBye(); // Bye, Aarya


