var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(name, age) {
        this.name = name;
        this.age = age;
    }
    Player.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Player;
}());
var person1 = new Player("Dave", 44);
person1.greet();
/* Access Modifiers
public: accessible anywhere (default)
private: accessible only within the class
protected: accessible within the class and subclasses
*/
var Employee = /** @class */ (function () {
    function Employee(name, salary, isMarried) {
        this.name = name;
        this.salary = salary;
        this.isMarried = isMarried;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var emp1 = new Employee("Dave", 3500, false);
console.log(emp1.salary); //Property 'salary' is private and only accessible within class 'Employee'.
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, isMarried) {
        return _super.call(this, name, isMarried) || this; // Call parent constructor
    }
    Manager.prototype.describe = function () {
        console.log("".concat(this.name, " is ").concat(this.isMarried ? "married" : "not married"));
        // this.isMarried is accessible here because it's protected
    };
    return Manager;
}(Employee));
//Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        console.log("distance covered: " + distance);
    };
    return Animal;
}());
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cat.prototype.meow = function () {
        console.log("Meeeow");
    };
    return cat;
}(Animal));
