let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

//--------------
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

//---------------------
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
//----------------------------
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}
//will be generated as:
//var numbers = [1, 2, 3];
//for (var _i = 0; _i < numbers.length; _i++) {
//    var num = numbers[_i];
//    console.log(num);
//}



