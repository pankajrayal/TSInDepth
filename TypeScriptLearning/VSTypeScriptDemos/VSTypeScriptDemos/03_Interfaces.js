var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var p1 = { x: 10, y: 20 };
var squareOptions = { colour: "red", width: 100 };
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
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
//interfaces extending classes
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
//class Image {
//    select() { }
//}
//class Location {
//    select() { }
//}
