let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      console.log(this.name);
    }
  
  };
  
  user.sayHi(); // John
  