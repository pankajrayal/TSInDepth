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
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(""" + s + "" " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
}






