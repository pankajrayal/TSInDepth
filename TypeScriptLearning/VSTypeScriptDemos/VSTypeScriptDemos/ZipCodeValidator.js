//ZipCodeValidator.ts
//export const numberRegexp = /^[0-9]+$/;
//export class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//---------------------------
//class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//export { ZipCodeValidator };
//export { ZipCodeValidator as mainValidator };
////ZipCodeValidator.ts
//export default class ZipCodeValidator {
//    static numberRegexp = /^[0-9]+$/;
//    isAcceptable(s: string) {
//        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
//    }
//}
////ZipCodeValidator.ts
//let numberRegexp = /^[0-9]+$/;
//class ZipCodeValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//export = ZipCodeValidator;
////ZipCodeValidator.ts
//import { StringValidator } from "./Validation";
//const numberRegexp = /^[0-9]+$/;
//export class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//ZipCodeValidator.ts
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));