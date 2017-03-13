////import validator from "./ZipCodeValidator";
////let myValidator = new validator();
////import validate from "./StaticZipCodeValidator";
////let strings = ["Hello", "98052", "101"];
////// Use function validate
////strings.forEach(s => {
////    console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
////});
////-------------
//////Test.ts
////import zip = require("./ZipCodeValidator");
////// Some samples to try
////let strings = ["Hello", "98052", "101"];
////// Validators to use
////let validator = new zip();
////// Show whether each string passed each validator
////strings.forEach(s => {
////    console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
////});
////Test.ts
//import { StringValidator } from "./Validation";
//import { ZipCodeValidator } from "./ZipCodeValidator";
//import { LettersOnlyValidator } from "./LettersOnlyValidator";
//// Some samples to try
//let strings = ["Hello", "98052", "101"];
//// Validators to use
//let validators: { [s: string]: StringValidator; } = {};
//validators["ZIP code"] = new ZipCodeValidator();
//validators["Letters only"] = new LettersOnlyValidator();
//// Show whether each string passed each validator
//strings.forEach(s => {
//    for (let name in validators) {
//        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//    }
//});
//Test.ts
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s_1 = strings_1[_i];
    for (var name_1 in validators) {
        console.log("", " + s + ", " " + (validators[name_1].isAcceptable(s_1) ? " matches " : " does not match ") + name_1);
    }
}
