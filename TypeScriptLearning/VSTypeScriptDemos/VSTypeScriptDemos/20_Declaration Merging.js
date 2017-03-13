//interface Box {
//    height: number;
//    width: number;
//}
//interface Box {
//    scale: number;
//}
//let box: Box = { height: 5, width: 6, scale: 10 };
///----------------
//interface Cloner {
//    clone(animal: Animal): Animal;
//}
//interface Cloner {
//    clone(animal: Sheep): Sheep;
//}
//interface Cloner {
//    clone(animal: Dog): Dog;
//    clone(animal: Cat): Cat;
//}
//-----------------------------------
//interface Cloner {
//    clone(animal: Dog): Dog;
//    clone(animal: Cat): Cat;
//    clone(animal: Sheep): Sheep;
//    clone(animal: Animal): Animal;
//}
//------------------------
//interface Document {
//    createElement(tagName: any): Element;
//}
//interface Document {
//    createElement(tagName: "div"): HTMLDivElement;
//    createElement(tagName: "span"): HTMLSpanElement;
//}
//interface Document {
//    createElement(tagName: string): HTMLElement;
//    createElement(tagName: "canvas"): HTMLCanvasElement;
//}
//---------------------
//interface Document {
//    createElement(tagName: "canvas"): HTMLCanvasElement;
//    createElement(tagName: "div"): HTMLDivElement;
//    createElement(tagName: "span"): HTMLSpanElement;
//    createElement(tagName: string): HTMLElement;
//    createElement(tagName: any): Element;
//}
//----------------------------
//namespace Animals {
//    export class Zebra { }
//}
//namespace Animals {
//    export interface Legged { numberOfLegs: number; }
//    export class Dog { }
//}
//is equivalent to:
//namespace Animals {
//    export interface Legged { numberOfLegs: number; }
//    export class Zebra { }
//    export class Dog { }
//}
///-----------------------------
//namespace Animal {
//    let haveMuscles = true;
//    export function animalsHaveMuscles() {
//        return haveMuscles;
//    }
//}
//namespace Animal {
//    export function doAnimalsHaveMuscles() {
//        return haveMuscles;  // <-- error, haveMuscles is not visible here
//    }
//}
//---------------------------
//Merging Namespaces with Classes
//This gives the user a way of describing inner classes.
//class Album {
//    label: Album.AlbumLabel;
//}
//namespace Album {
//    export class AlbumLabel { }
//}
//function buildLabel(name: string): string {
//    return buildLabel.prefix + name + buildLabel.suffix;
//}
//namespace buildLabel {
//    export let suffix = "";
//    export let prefix = "Hello, ";
//}
//alert(buildLabel("Sam Smith"));
//Similarly, namespaces can be used to extend enums with static members:
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
//------
//module augmentation
//// observable.js
//export class Observable<T> {
//    // ... implementation left as an exercise for the reader ...
//}
//// map.js
//import { Observable } from "./observable";
//Observable.prototype.map = function (f) {
//    // ... another exercise for the reader
//}
//-----------------
//// observable.ts stays the same
//// map.ts
//import { Observable } from "./observable";
//declare module "./observable" {
//    interface Observable<T> {
//        map<U>(f: (x: T) => U): Observable<U>;
//    }
//}
//Observable.prototype.map = function (f) {
//    // ... another exercise for the reader
//}
//// consumer.ts
//import { Observable } from "./observable";
//import "./map";
//let o: Observable<number>;
//o.map(x => x.toFixed());
//----------------------------------
//Global augmentation
//You can also add declarations to the global scope from inside a module:
//// observable.ts
//export class Observable<T> {
//    // ... still no implementation ...
//}
//declare global {
//    interface Array<T> {
//        toObservable(): Observable<T>;
//    }
//}
//Array.prototype.toObservable = function () {
//    // ...
//}
//declare namespace JSX {
//    interface IntrinsicElements {
//        foo: any
//    }
//}
//<foo />; // ok
//    < bar />; // error
//---------------------
//Value-based elements
//import MyComponent from "./myComponent";
//<MyComponent />; // ok
//    < SomeOtherComponent />; // error
//class MyComponent {
//    render() { }
//}
//// use a construct signature
//var myComponent = new MyComponent();
//// element class type => MyComponent
//// element instance type => { render: () => void }
//function MyFactoryFunction() {
//    return {
//        render: () => {
//        }
//    }
//}
//// use a call signature
//var myComponent = MyFactoryFunction();
//// element class type => FactoryFunction
//// element instance type => { render: () => void }
//----------------------
//declare namespace JSX {
//    interface ElementClass {
//        render: any;
//    }
//}
//class MyComponent {
//    render() { }
//}
//function MyFactoryFunction() {
//    return { render: () => { } }
//}
//<MyComponent />; // ok
//    < MyFactoryFunction />; // ok
//class NotAValidComponent { }
//function NotAValidFactoryFunction() {
//    return {};
//}
//<NotAValidComponent />; // error
//    < NotAValidFactoryFunction />; // error
//--------------Attribute type checking
//declare namespace JSX {
//    interface IntrinsicElements {
//        foo: { bar?: boolean }
//    }
//}
//// element attributes type for 'foo' is '{bar?: boolean}'
//<foo bar />;
//-----------------
//declare namespace JSX {
//    interface ElementAttributesProperty {
//        props; // specify the property name to use
//    }
//}
//class MyComponent {
//    // specify the property on the element instance type
//    props: {
//        foo?: string;
//    }
//}
//// element attributes type for 'MyComponent' is '{foo?: string}'
//<MyComponent foo="bar" />
//-----------------------------------
//declare namespace JSX {
//    interface IntrinsicElements {
//        foo: { requiredProp: string; optionalProp?: number }
//    }
//}
//<foo requiredProp="bar" />; // ok
//<foo requiredProp="bar" optionalProp= { 0} />; // ok
//<foo />; // error, requiredProp is missing
//    < foo requiredProp= { 0} />; // error, requiredProp should be a string
//<foo requiredProp="bar" unknownProp />; // error, unknownProp does not exist
//<foo requiredProp="bar" some- unknown - prop />; // ok, because 'some-unknown-prop' is not a valid identifier
//-------------------------
//var props = { requiredProp: "bar" };
//<foo {...props } />; // ok
//var badProps = {};
//<foo {...badProps } />; // error
//---------------------------
//Embedding expressions
//var a = <div>
//    { ["foo", "bar"].map(i => <span>{ i / 2}</span>)}
//    < /div>
//var a = <div>
//    { ["foo", "bar"].map(function (i) { return <span>{ i / 2}</span>; })}
//    < /div>
//------------------------
//react integration
/// <reference path="react.d.ts" />
//interface Props {
//    foo: string;
//}
//class MyComponent extends React.Component<Props, {}> {
//    render() {
//        return <span>{ this.props.foo } < /span>
//    }
//}
//<MyComponent foo="bar" />; // ok
//<MyComponent foo={ 0 } />; / / error
