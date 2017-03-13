//let sym = Symbol();

//let obj = {
//    [sym]: "value"
//};

//console.log(obj[sym]); // "value"



const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol]() {
        return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"



