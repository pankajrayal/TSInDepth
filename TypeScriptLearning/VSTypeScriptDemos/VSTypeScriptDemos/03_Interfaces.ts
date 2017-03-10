interface LabelledValue {
    label: string;
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//Optional Properties
//interface SquareConfig {
//    color?: string;
//    width?: number;
//}

//function createSquare(config: SquareConfig): { color: string; area: number } {
//    let newSquare = { color: "white", area: 100 };
//    if (config.color) {
//        newSquare.color = config.color;
//    }
//    if (config.width) {
//        newSquare.area = config.width * config.width;
//    }
//    return newSquare;
//}

//let mySquare = createSquare({ color: "black" });
// v2--------------------------------
//interface SquareConfig {
//    color?: string;
//    width?: number;
//}

//function createSquare(config: SquareConfig): { color: string; area: number } {
//    let newSquare = { color: "white", area: 100 };
//    if (config.color) {
//        // Error: Property 'clor' does not exist on type 'SquareConfig'
//        newSquare.color = config.clor;
//    }
//    if (config.width) {
//        newSquare.area = config.width * config.width;
//    }
//    return newSquare;
//}

//let mySquare = createSquare({ color: "black" });

//Readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
//p1.x = 5; // error!

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100 };
//let mySquare = createSquare(squareOptions);

interface SearchFunc {
    (source: string, subString: string): boolean;
}

//let mySearch: SearchFunc;
//mySearch = function (source: string, subString: string) {
//    let result = source.search(subString);
//    return result > -1;
//}

//let mySearch: SearchFunc;
//mySearch = function (src: string, sub: string): boolean {
//    let result = src.search(sub);
//    return result > -1;
//}

let mySearch: SearchFunc;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
//----------------
interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
//    name: string;      // error, the type of 'name' is not a subtype of the indexer
}

//implementating an interface
//interface ClockInterface {
//    currentTime: Date;
//}

//class Clock implements ClockInterface {
//    currentTime: Date;
//    constructor(h: number, m: number) { }
//}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

//class Clock implements ClockInterface {
//    currentTime: Date;
//    setTime(d: Date) {
//        this.currentTime = d;
//    }
//    constructor(h: number, m: number) { }
//}

interface ClockConstructor {
    new (hour: number, minute: number);
}

//class Clock implements ClockConstructor {
//    currentTime: Date;
//    constructor(h: number, m: number) { }
//}


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

//class DigitalClock implements ClockInterface {
//    constructor(h: number, m: number) { }
//    tick() {
//        console.log("beep beep");
//    }
//}
//class AnalogClock implements ClockInterface {
//    constructor(h: number, m: number) { }
//    tick() {
//        console.log("tick tock");
//    }
//}

//let digital = createClock(DigitalClock, 12, 17);
//let analog = createClock(AnalogClock, 7, 32);

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;



//interfaces extending classes
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() { }
}

class TextBox extends Control {
    select() { }
}

//class Image {
//    select() { }
//}

//class Location {
//    select() { }
//}











