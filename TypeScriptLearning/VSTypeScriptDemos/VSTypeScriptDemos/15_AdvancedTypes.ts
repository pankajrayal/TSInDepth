//---------------------
//function extend<T, U>(first: T, second: U): T & U {
//    let result = <T & U>{};
//    for (let id in first) {
//        (<any>result)[id] = (<any>first)[id];
//    }
//    for (let id in second) {
//        if (!result.hasOwnProperty(id)) {
//            (<any>result)[id] = (<any>second)[id];
//        }
//    }
//    return result;
//}

//class Person {
//    constructor(public name: string) { }
//}
//interface Loggable {
//    log(): void;
//}
//class ConsoleLogger implements Loggable {
//    log() {
//        // ...
//    }
//}
//var jim = extend(new Person("Jim"), new ConsoleLogger());
//var n = jim.name;
//jim.log();

//---------------------
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
//function padLeft(value: string, padding: any) {
//    if (typeof padding === "number") {
//        return Array(padding + 1).join(" ") + value;
//    }
//    if (typeof padding === "string") {
//        return padding + value;
//    }
//    throw new Error(`Expected string or number, got '${padding}'.`);
//}

//padLeft("Hello world", 4); // returns "    Hello world"
//let indentedString = padLeft("Hello world", true); // passes at compile time, fails at runtime.

//---------------------
///**
// * Takes a string and adds "padding" to the left.
// * If 'padding' is a string, then 'padding' is appended to the left side.
// * If 'padding' is a number, then that number of spaces is added to the left side.
// */
//function padLeft(value: string, padding: string | number) {
//    // ...
//}

//let indentedString = padLeft("Hello world", true); // errors during compilation

//---------------------
//interface Bird {
//    fly();
//    layEggs();
//}

//interface Fish {
//    swim();
//    layEggs();
//}

//function getSmallPet(): Fish | Bird {
//    // ...
//}

//let pet = getSmallPet();
//pet.layEggs(); // okay
//pet.swim();    // errors

//---------------------
//let pet = getSmallPet();

//// Each of these property accesses will cause an error
//if (pet.swim) {
//    pet.swim();
//}
//else if (pet.fly) {
//    pet.fly();
//}
//To get the same code working, we’ll need to use a type assertion:

//let pet = getSmallPet();

//if ((<Fish>pet).swim) {
//    (<Fish>pet).swim();
//}
//else {
//    (<Bird>pet).fly();
//}

//function isFish(pet: Fish | Bird): pet is Fish {
//    return (<Fish>pet).swim !== undefined;
//}

//// Both calls to 'swim' and 'fly' are now okay.

//if (isFish(pet)) {
//    pet.swim();
//}
//else {
//    pet.fly();
//}


//---------------------
//function isNumber(x: any): x is number {
//    return typeof x === "number";
//}

//function isString(x: any): x is string {
//    return typeof x === "string";
//}

//function padLeft(value: string, padding: string | number) {
//    if (isNumber(padding)) {
//        return Array(padding + 1).join(" ") + value;
//    }
//    if (isString(padding)) {
//        return padding + value;
//    }
//    throw new Error(`Expected string or number, got '${padding}'.`);
//}

//---------------------
//function padLeft(value: string, padding: string | number) {
//    if (typeof padding === "number") {
//        return Array(padding + 1).join(" ") + value;
//    }
//    if (typeof padding === "string") {
//        return padding + value;
//    }
//    throw new Error(`Expected string or number, got '${padding}'.`);
//}

//---------------------
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}

//---------------------
let s = "foo";
s = null; // error, 'null' is not assignable to 'string'
let sn: string | null = "bar";
sn = null; // ok

sn = undefined; // error, 'undefined' is not assignable to 'string | null'

//---------------------
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // error, 'null' is not assignable to 'number | undefined'

//---------------------
//class C {
//    a: number;
//    b?: number;
//}
//let c = new C();
//c.a = 12;
//c.a = undefined; // error, 'undefined' is not assignable to 'number'
//c.b = 13;
//c.b = undefined; // ok
//c.b = null; // error, 'null' is not assignable to 'number | undefined'

//---------------------
//function f(sn: string | null): string {
//    if (sn == null) {
//        return "default";
//    }
//    else {
//        return sn;
//    }
//}

//function f(sn: string | null): string {
//    return sn || "default";
//}

//function broken(name: string | null): string {
//    function postfix(epithet: string) {
//        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
//    }
//    name = name || "Bob";
//    return postfix("great");
//}

//function fixed(name: string | null): string {
//    function postfix(epithet: string) {
//        return name!.charAt(0) + '.  the ' + epithet; // ok
//    }
//    name = name || "Bob";
//    return postfix("great");
//}

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

type Container<T> = { value: T };

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}


//---------------------
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
//var s = people.name;
//var s = people.next.name;
//var s = people.next.next.name;
//var s = people.next.next.next.name;

//---------------------
//type Yikes = Array<Yikes>; // error
//Interfaces vs.Type Aliases

//---------------------
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

//---------------------
//type Easing = "ease-in" | "ease-out" | "ease-in-out";
//class UIElement {
//    animate(dx: number, dy: number, easing: Easing) {
//        if (easing === "ease-in") {
//            // ...
//        }
//        else if (easing === "ease-out") {
//        }
//        else if (easing === "ease-in-out") {
//        }
//        else {
//            // error! should not pass null or undefined.
//        }
//    }
//}

//let button = new UIElement();
//button.animate(0, 0, "ease-in");
//button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

//---------------------
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
}

//---------------------
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

//type Shape = Square | Rectangle | Circle;

//function area(s: Shape) {
//    switch (s.kind) {
//        case "square": return s.size * s.size;
//        case "rectangle": return s.height * s.width;
//        case "circle": return Math.PI * s.radius ** 2;
//    }
//}

type Shape = Square | Rectangle | Circle | Triangle;
//function area(s: Shape) {
//    switch (s.kind) {
//        case "square": return s.size * s.size;
//        case "rectangle": return s.height * s.width;
//        case "circle": return Math.PI * s.radius ** 2;
//    }
//    // should error here - we didn't handle case "triangle"
//}

//function area(s: Shape): number { // error: returns number | undefined
//    switch (s.kind) {
//        case "square": return s.size * s.size;
//        case "rectangle": return s.height * s.width;
//        case "circle": return Math.PI * s.radius ** 2;
//    }
//}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}


class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

//let v = new BasicCalculator(2)
//    .multiply(5)
//    .add(1)
//    .currentValue();

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let v = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();

//function pluck(o, names) {
//    return names.map(n => o[n]);
//}

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
let personProps: keyof Person; // 'name' | 'age'
//pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'
//---------------------
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

//let name: string = getProperty(person, 'name');
//let age: number = getProperty(person, 'age');
//let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number

interface PersonPartial {
    name?: string;
    age?: number;
}

interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}

//type Readonly<T> = {
//    readonly[P in keyof T]: T[P];
//}
//type Partial<T> = {
//[P in keyof T]?: T[P];
//}

//type PersonPartial = Partial<Person>;
//type ReadonlyPerson = Readonly<Person>;

type Keys = 'option1' | 'option2';
type Flags = {[K in Keys]: boolean };


type NullablePerson = {[P in keyof Person]: Person[P] | null }
type PartialPerson = {[P in keyof Person]?: Person[P]}

//type Nullable<T> = {[P in keyof T]: T[P] | null }
//type Partial<T> = {[P in keyof T]?: T[P]}

//type Proxy<T> = {
//    get(): T;
//    set(value: T): void;
//}
//type Proxify<T> = {
//[P in keyof T]: Proxy<T[P]>;
//}
//function proxify<T>(o: T): Proxify<T> {
//    // ... wrap proxies ...
//}
//let proxyProps = proxify(props);

//type Pick<T, K extends keyof T> = {
//[P in K]: T[P];
//}
//type Record<K extends string | number, T> = {
//[P in K]: T;
//}

//type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

let originalProps = unproxify(proxyProps);






//---------------------

