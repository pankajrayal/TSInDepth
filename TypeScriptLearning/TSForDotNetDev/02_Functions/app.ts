//Optional, Default and Rest Parameters
//A method in TypeScript can contain optional, default and
//rest parameters, which are all available in C# and work in
//practically the same way. The syntax for declaring each of
//these is shown below.
//To mark a parameter as optional, append a question mark to
//the parameter name. Optional parameters must be ordered
//after non-optional parameters.

// module Parameters {
//     export class Example {
//         optionalParameter(name?: string) {
//             return name;
//         }
//     }
// }
//-------------------------------------
//To add a default value to a parameter, append the value
//after the type annotation. As I’ll explain at the end of this
//section, the value does not have to be a compile-time
//constant.

// module Parameters {
//     export class Example {
//         defaultParameter(name: string = 'Default') {
//             return name;
//         }
//     }
// }

//-------------------------------------

//Rest parameters allow calling code to specify zero or more
//instances of the specified type. To specify a rest parameter,
//prefix the name with three periods. Rest parameters must
//appear last in the method signature.

// module Parameters{
//     export class Example{
//         restParameter(...name:string[]){
//             return name.toString();
//         }
//     }
// }
//-------------------------------------
//A common example of this in C# is the string.Format
//method, which accepts arguments containing a format string
//and any number of arguments, which are used to replace
//tokens in this format string. The following example shows
//the method signature for a TypeScript implementation of string.Format:
module System{
    export class String{
        static format(formatString:string, ...args:any[]){
            //..............
        }
    }
}

System.String.format('My {0}{1} format example', 1, 'st');


//-------------------------------------
//-------------------------------------
//-------------------------------------
//-------------------------------------
//-------------------------------------
//-------------------------------------
//-------------------------------------


























