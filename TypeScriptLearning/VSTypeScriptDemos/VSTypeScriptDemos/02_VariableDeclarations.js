//var declaration
var a = 10;
//function f() {
//    var message = "Hello, world!";
//    return message;
//}
//function f() {
//    var a = 10;
//    return function g() {
//        var b = a + 1;
//        return b;
//    }
//}
//var g = f();
//g(); // returns '11'
//v3
//function f() {
//    var a = 1;
//    a = 2;
//    var b = g();
//    a = 3;
//    return b;
//    function g() {
//        return a;
//    }
//}
//f(); // returns '2'
function foo(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
foo(true); // returns '10'
foo(false); // returns 'undefined'
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
//Variable capturing quirks:
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
var hello = "Hello!";
function fa(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        return b;
    }
    // Error: 'b' doesn't exist here
    //return b;
}
function foo1() {
    // okay to capture 'a'
    return a;
}
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo1();
//let a;
function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f(false, 0); // returns '0'
f(true, 0); // returns '100'
function sumMatrix2(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var _loop_1 = function (i_3) {
    setTimeout(function () { console.log(i_3); }, 100 * i_3);
};
for (var i_3 = 0; i_3 < 10; i_3++) {
    _loop_1(i_3);
}
//const declaration
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
//// Error
//kitty = {
//    name: "Danielle",
//    numLives: numLivesForCat
//};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
//Array destructuring:
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
first = input[0];
second = input[1];
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
