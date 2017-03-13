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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceRepeatingPadder = (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// Type is 'SpaceRepeatingPadder | StringPadder'
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // type narrowed to 'StringPadder'
}
//---------------------
var s = "foo";
s = null; // error, 'null' is not assignable to 'string'
var sn = "bar";
sn = null; // ok
sn = undefined; // error, 'undefined' is not assignable to 'string | null'
//---------------------
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // error, 'null' is not assignable to 'number | undefined'
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
var people;
// ... more overloads ...
function createElement(tagName) {
    // ... code goes here ...
}
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
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s); // error here if there are missing cases
    }
}
var BasicCalculator = (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
//let v = new BasicCalculator(2)
//    .multiply(5)
//    .add(1)
//    .currentValue();
var ScientificCalculator = (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var v = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
//function pluck(o, names) {
//    return names.map(n => o[n]);
//}
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
var personProps; // 'name' | 'age'
//pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'
//---------------------
function getProperty(o, name) {
    return o[name]; // o[name] is of type T[K]
}
var keys; // string
var value; // number
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
function unproxify(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
var originalProps = unproxify(proxyProps);
//---------------------
