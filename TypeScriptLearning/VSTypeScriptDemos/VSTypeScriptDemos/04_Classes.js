var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
//inheritance
//class Animal {
//    name: string;
//    constructor(theName: string) { this.name = theName; }
//    move(distanceInMeters: number = 0) {
//        console.log(`${this.name} moved ${distanceInMeters}m.`);
//    }
//}
//class Snake extends Animal {
//    constructor(name: string) { super(name); }
//    move(distanceInMeters = 5) {
//        console.log("Slithering...");
//        super.move(distanceInMeters);
//    }
//}
//class Horse extends Animal {
//    constructor(name: string) { super(name); }
//    move(distanceInMeters = 45) {
//        console.log("Galloping...");
//        super.move(distanceInMeters);
//    }
//}
//let sam = new Snake("Sammy the Python");
//let tom: Animal = new Horse("Tommy the Palomino");
//sam.move();
//tom.move(34);
//class Animal {
//    private name: string;
//    constructor(theName: string) { this.name = theName; }
//}
//class Rhino extends Animal {
//    constructor() { super("Rhino"); }
//}
//class Employee {
//    private name: string;
//    constructor(theName: string) { this.name = theName; }
//}
//let animal = new Animal("Goat");
//let rhino = new Rhino();
//let employee = new Employee("Bob");
//animal = rhino;
//animal = employee; // Error: 'Animal' and 'Employee' are not compatible
//Understanding protected
//class Person {
//    protected name: string;
//    constructor(name: string) { this.name = name; }
//}
//class Employee extends Person {
//    private department: string;
//    constructor(name: string, department: string) {
//        super(name);
//        this.department = department;
//    }
//    public getElevatorPitch() {
//        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//    }
//}
//let howard = new Employee("Howard", "Sales");
//console.log(howard.getElevatorPitch());
////console.log(howard.name); // error
//
//class Person {
//    protected name: string;
//    protected constructor(theName: string) { this.name = theName; }
//}
//// Employee can extend Person
//class Employee extends Person {
//    private department: string;
//    constructor(name: string, department: string) {
//        super(name);
//        this.department = department;
//    }
//    public getElevatorPitch() {
//        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//    }
//}
//let howard = new Employee("Howard", "Sales");
//let john = new Person("John"); // Error: The 'Person' constructor is protected
//-----------------------------------------------------
//Readonly modifiers
//class Octopus {
//    readonly name: string;
//    readonly numberOfLegs: number = 8;
//    constructor(theName: string) {
//        this.name = theName;
//    }
//}
//let dad = new Octopus("Man with the 8 strong legs");
////dad.name = "Man with the 3-piece suit"; // error! name is readonly.
//-----------------------------------------------------
//Parameter properties
//class Octopus {
//    readonly numberOfLegs: number = 8;
//    constructor(readonly name: string) {
//    }
//}
//-----------------------------------------------------
//accessors
//class Employee {
//    fullName: string;
//}
//let employee = new Employee();
//employee.fullName = "Bob Smith";
//if (employee.fullName) {
//    console.log(employee.fullName);
//}
var passcode = "secret passcode";
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//-----------------------------------------------------
//Static properties
//class Grid {
//    static origin = { x: 0, y: 0 };
//    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//        let xDist = (point.x - Grid.origin.x);
//        let yDist = (point.y - Grid.origin.y);
//        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//    }
//    constructor(public scale: number) { }
//}
//let grid1 = new Grid(1.0);  // 1x scale
//let grid2 = new Grid(5.0);  // 5x scale
//console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//-----------------------------------------------------
//abstract class
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("roaming the earth...");
    };
    return Animal;
}());
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type
//-----------------------------------------------------
//constructor functions
//class Greeter {
//    greeting: string;
//    constructor(message: string) {
//        this.greeting = message;
//    }
//    greet() {
//        return "Hello, " + this.greeting;
//    }
//}
//let greeter: Greeter;
//greeter = new Greeter("world");
//console.log(greeter.greet());
//let Greeter = (function () {
//    function Greeter(message) {
//        this.greeting = message;
//    }
//    Greeter.prototype.greet = function () {
//        return "Hello, " + this.greeting;
//    };
//    return Greeter;
//})();
//let greeter;
//greeter = new Greeter("world");
//console.log(greeter.greet());
//class Greeter {
//    static standardGreeting = "Hello, there";
//    greeting: string;
//    greet() {
//        if (this.greeting) {
//            return "Hello, " + this.greeting;
//        }
//        else {
//            return Greeter.standardGreeting;
//        }
//    }
//}
//let greeter1: Greeter;
//greeter1 = new Greeter();
//console.log(greeter1.greet());
//let greeterMaker: typeof Greeter = Greeter;
//greeterMaker.standardGreeting = "Hey there!";
//let greeter2: Greeter = new greeterMaker();
//console.log(greeter2.greet());
//class Greeter {
//    static standardGreeting = "Hello, there";
//    greeting: string;
//    greet() {
//        if (this.greeting) {
//            return "Hello, " + this.greeting;
//        }
//        else {
//            return Greeter.standardGreeting;
//        }
//    }
//}
//let greeter1: Greeter;
//greeter1 = new Greeter();
//console.log(greeter1.greet());
//let greeterMaker: typeof Greeter = Greeter;
//greeterMaker.standardGreeting = "Hey there!";
//let greeter2: Greeter = new greeterMaker();
//console.log(greeter2.greet());
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
