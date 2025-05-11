//Class methods

class Person {
    name = "John";

    greet() {                // method
        console.log("Hi " + this.name);
    }
}
let p = new Person();
p.greet(); // Hi John

//Together: Properties + Methods
class Passenger {
    name = "Dave";
    class = "Business";

    flightClass() {
        this.class = "Economy";
        console.log(`${this.name} is in flight class ${this.class}`)
    }
    upgradeClass() {
        this.class = "First class";
        console.log(`${this.name} is upgraded to class ${this.class}`)
    }
}

let firstPassenger = new Passenger();
firstPassenger.flightClass();
firstPassenger.upgradeClass();