class Player {
    name: String;
    age: number;
  
    constructor(name:string, age:number)
    {
      this.name = name;
      this.age = age;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
  }
  
  const person1 = new Player("Dave", 44);
  person1.greet(); 
  
  /* Access Modifiers
  public: accessible anywhere (default)
  private: accessible only within the class
  protected: accessible within the class and subclasses
  */
  class Employee{
    public name: string;
    private salary: number;
    protected isMarried: boolean;
  
  constructor(name: string, salary: number, isMarried: boolean)
  {
    this.name = name;
    this.salary = salary;
    this.isMarried = isMarried;
  }
  
  getSalary(): number {
    return this.salary;
  }
  }
  
  let emp1 = new Employee("Dave", 3500, false)
  console.log(emp1.salary) //Property 'salary' is private and only accessible within class 'Employee'.

  class Manager extends Employee {
    constructor(name: string, isMarried: boolean) {
      super(name, isMarried); // Call parent constructor
    }
  
    describe(): void {
      console.log(`${this.name} is ${this.isMarried ? "married" : "not married"}`);
      // this.isMarried is accessible here because it's protected
    }
  }
  
  //Inheritance
  class Animal{
    move(distance: number) : void {
        console.log("distance covered: " + distance)
    }
  }

  class Cat extends Animal {
    meow(): void {
        console.log("Meeeow")
    }
    }
    let cat = new Cat();
    cat.meow()

    //Getters and Setters
    class Circle {
        private _radius: number = 0;
      
        get radius(): number {
          return this._radius;
        }
      
        set radius(value: number) {
          if (value < 0) throw new Error("Radius cannot be negative");
          this._radius = value;
        }
      }
      
      const circle = new Circle();
      circle.radius = 5;
      console.log(circle.radius); // 5

      //Static- When you write static in front of a property or method in a class, it means: You can use it without creating an object.
      
      //without static
      class Car {
        start() {
          console.log("Car started");
        }
      }
      
      const myCar = new Car(); // Create object
      myCar.start();           // Call method

      //with static
      class MathUtil {
        static PI = 3.14;
      
        static calculateArea(radius: number) {
          return this.PI * radius * radius;
        }
      }
      
      console.log(MathUtil.calculateArea(5)); // 78.5

      //Abstract classes, which is a blueprint for other classes. You cannot create an object from it directly. Subclasses must fill in the missing pieces.
      abstract class Animal {
        abstract makeSound(): void; // No body — subclass must implement
      
        move(): void {
          console.log("Animal moved");
        }
      }
      
      // Subclass
      class Dog extends Animal {
        makeSound(): void {
          console.log("Woof!");
        }
      }
      
      const dog = new Dog();
      dog.makeSound();  // Woof!
      dog.move();       // Animal moved
      
      // ❌ This will cause an error:
      // const a = new Animal(); // Cannot create an instance of abstract class
