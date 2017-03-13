////amdModule.ts

/////<amd-module name="NamedModule"/>
//export class C {
//}

//------------------
//Will result in assigning the name NamedModule to the module as part of calling the AMD define:
//amdModule.js

//define("NamedModule", ["require", "exports"], function (require, exports) {
//    var C = (function () {
//        function C() {
//        }
//        return C;
//    })();
//    exports.C = C;
//});
///// <amd-dependency />
//--------------------
//The amd-dependency directive can also have an optional name property; this allows passing an optional name for an amd-dependency:
///// <amd-dependency path="legacy/moduleA" name="moduleA"/>
//declare var moduleA: MyType
//moduleA.callStuff()

//Generated JS code:
//define(["require", "exports", "legacy/moduleA"], function (require, exports, moduleA) {
//    moduleA.callStuff()
//});


//---------
//var browserify = require("browserify");
//var tsify = require("tsify");

//browserify()
//    .add("main.ts")
//    .plugin("tsify", { noImplicitAny: true })
//    .bundle()
//    .pipe(process.stdout);

//module.exports = function (grunt) {
//    grunt.initConfig({
//        ts: {
//            default: {
//                src: ["**/*.ts", "!node_modules/**/*.ts"]
//            }
//        }
//    });
//    grunt.loadNpmTasks("grunt-ts");
//    grunt.registerTask("default", ["ts"]);
//};







