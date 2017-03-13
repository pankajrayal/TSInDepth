//-----------------------------------------------------
//hello world of Generics
//function identity(arg: number): number {
//    return arg;
//}
//function identity(arg: any): any {
//    return arg;
//}
//function identity<T>(arg: T): T {
//    return arg;
//}
//let output = identity<string>("myString");  // type of output will be 'string'
//let output = identity("myString");  // type of output will be 'string'
//-----------------------------------------------------
//working with generic type variables:
function identity(arg) {
    return arg;
}
//function loggingIdentity<T>(arg: T): T {
//    //console.log(arg.length);  // Error: T doesn't have .length
//    return arg;
//}
//function loggingIdentity<T>(arg: T[]): T[] {
//    console.log(arg.length);  // Array has a .length, so no more error
//    return arg;
//}
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
