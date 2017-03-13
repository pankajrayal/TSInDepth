//interface Named {
//    name: string;
//}

//class Person {
//    name: string;
//}

//let p: Named;
//// OK, because of structural typing
//p = new Person();


interface Named {
    name: string;
}

//let x: Named;
//// y's inferred type is { name: string; location: string; }
//let y = { name: "Alice", location: "Seattle" };
//x = y;

function greet(n: Named) {
    alert("Hello, " + n.name);
}
greet(y); // OK

let items = [1, 2, 3];

// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));

// Should be OK!
items.forEach(item => console.log(item));

//-----------------------------------
//let x = () => ({ name: "Alice" });
//let y = () => ({ name: "Alice", location: "Seattle" });

//x = y; // OK
//y = x; // Error because x() lacks a location property
//--------------------
//Function Parameter Bivariance

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}

//// Unsound, but useful and common
//listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

//// Undesirable alternatives in presence of soundness
//listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
//listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));

//// Still disallowed (clear error). Type safety enforced for wholly incompatible types
//listenEvent(EventType.Mouse, (e: number) => console.log(e));

//------------------------------

//Optional Parameters and Rest Parameters
//function invokeLater(args: any[], callback: (...args: any[]) => void) {
//    /* ... Invoke callback with 'args' ... */
//}

//// Unsound - invokeLater "might" provide any number of arguments
//invokeLater([1, 2], (x, y) => console.log(x + ", " + y));

//// Confusing (x and y are actually required) and undiscoverable
//invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));
//-----------------------------------
//enums
//enum Status { Ready, Waiting };
//enum Color { Red, Blue, Green };

//let status = Status.Ready;
//status = Color.Green;  //error

//-----------------------------
//Private and protected members in classes
//class Animal {
//    feet: number;
//    constructor(name: string, numFeet: number) { }
//}

//class Size {
//    feet: number;
//    constructor(numFeet: number) { }
//}

//let a: Animal;
//let s: Size;

//a = s;  //OK
//s = a;  //OK
//----------------------------
//Generics
//interface Empty<T> {
//}
//let x: Empty<number>;
//let y: Empty<string>;

//x = y;  // okay, y matches structure of x


//interface NotEmpty<T> {
//    data: T;
//}
//let x: NotEmpty<number>;
//let y: NotEmpty<string>;

//x = y;  // error, x and y are not compatible

let identity = function <T>(x: T): T {
    // ...
}

let reverse = function <U>(y: U): U {
    // ...
}

identity = reverse;  // Okay because (x: any)=>any matches (y: any)=>any











