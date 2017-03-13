////LettersOnlyValidator.ts

//import { StringValidator } from "./Validation";

//const lettersRegexp = /^[A-Za-z]+$/;

//export class LettersOnlyValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return lettersRegexp.test(s);
//    }
//}

////-------------
///// <reference path="node.d.ts"/>
//import * as URL from "url";
//let myUrl = URL.parse("http://www.typescriptlang.org");

//LettersOnlyValidator.ts

/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

