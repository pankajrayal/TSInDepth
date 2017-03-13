var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence1 = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//// Declare a tuple type
//let x: [string, number];
//// Initialize it
//x = ["hello", 10]; // OK
//// Initialize it incorrectly
//x = [10, "hello"]; // Error
//console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
//console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
//x[6] = true; // Error, 'boolean' isn't 'string | number'
//enumerations
//enum Color { Red, Green, Blue };
//let c: Color = Color.Green;
//enum Color { Red = 1, Green, Blue };
//let c: Color = Color.Green;
//Or, even manually set all the values in the enum:
//enum Color { Red = 1, Green = 2, Blue = 4 };
//let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
//Any
//let notSure: any = 4;
//notSure = "maybe a string instead";
//notSure = false; // okay, definitely a boolean
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//let list: any[] = [1, true, "free"];
//list[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
//Null and Undefined
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
//Never Type
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//let someValue: any = "this is a string";
//let strLength: number = (<string>someValue).length;
var someValue = "this is a string";
var strLength = someValue.length;
