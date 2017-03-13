//function identity<T>(arg: T): T {
//    return arg;
//}
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//let myIdentity: <T>(arg: T) => T = identity;
//---------------------
//function identity<T>(arg: T): T {
//    return arg;
//}
//let myIdentity: <U>(arg: U) => U = identity;
//---------------------
//function identity<T>(arg: T): T {
//    return arg;
//}
//let myIdentity: { <T>(arg: T): T } = identity;
//---------------------
//interface GenericIdentityFn {
//    <T>(arg: T): T;
//}
//function identity<T>(arg: T): T {
//    return arg;
//}
//let myIdentity: GenericIdentityFn = identity;
//---------------------
//interface GenericIdentityFn<T> {
//    (arg: T): T;
//}
//function identity<T>(arg: T): T {
//    return arg;
//}
//let myIdentity: GenericIdentityFn<number> = identity;
//---------------------
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
//---------------------
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
//---------------------
function create(c) {
    return new c();
}
//---------------------
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function findKeeper(a) {
    return a.prototype.keeper;
}
findKeeper(Lion).nametag; // typechecks!
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
//---------------------
