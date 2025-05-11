class getPrice {
    constructor(discount)
    {
            let totalPrice = 100
            this.discount = totalPrice-discount
    }
    sayDiscount()
    {
        
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