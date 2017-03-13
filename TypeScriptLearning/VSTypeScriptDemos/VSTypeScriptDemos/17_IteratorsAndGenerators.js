var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
//--------------
var list = [4, 5, 6];
for (var i_1 in list) {
    console.log(i_1); // "0", "1", "2",
}
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var i_2 = list_1[_a];
    console.log(i_2); // "4", "5", "6"
}
//---------------------
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var pet in pets) {
    console.log(pet); // "species"
}
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log(pet); // "Cat", "Dog", "Hamster"
}
//----------------------------
var numbers = [1, 2, 3];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var num = numbers_1[_c];
    console.log(num);
}
//will be generated as:
//var numbers = [1, 2, 3];
//for (var _i = 0; _i < numbers.length; _i++) {
//    var num = numbers[_i];
//    console.log(num);
//}
