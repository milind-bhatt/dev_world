class Computer{
    batteryLife = 0;
    constructor(memory){
        this.memory = memory;
        console.log(`This computer has ${this.memory} GB memory.`)
    }
}
var myComputer = new Computer("2");
myComputer.batteryLife = 5;

/*
Right now the properties batteryLife and memory are public. We can easily get/set them from the outside to any value.
Let’s change batteryLife property to protected to have more control over it. For instance, we don’t want anyone to set it below zero.
*/
class Computer2{
    _batteryLife = 0; //Protected properties are usually prefixed with an underscore _
  
    set batteryLife(value) {
    if (value < 0) {
      value = 0;
    }
    this._batteryLife = value;
  }
  get batteryLife() {
    return this._batteryLife;
  }
    constructor(memory){
        this.memory = memory;
        console.log(`This computer has ${this.memory} GB memory.`)
    }
   
}

myComputer.batteryLife = -10; // _batteryLife will become 0, not -10


// Private property
class Person {
    #secret = "I love chocolate"; // private property
  
    showSecret() {
      console.log(this.#secret); // OK: can access inside the class
    }
  }
  
  let p = new Person();
  p.showSecret();      // ✅ Works: shows "I love chocolate"
  console.log(p.#secret); //  Error: private field, not allowed



