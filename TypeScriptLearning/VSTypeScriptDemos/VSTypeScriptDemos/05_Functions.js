//// Named function
//function add(x, y) {
//    return x + y;
//}
//// Anonymous function
//let myAdd = function (x, y) { return x + y; };
//let z = 100;
//function addToZ(x, y) {
//    return x + y + z;
//}
//---------------------------------
//typing the function
function add(x, y) {
    return x + y;
}
//let myAdd = function (x: number, y: number): number { return x + y; };
//let myAdd: (x: number, y: number) => number =
//    function (x: number, y: number): number { return x + y; };
//let myAdd: (baseValue: number, increment: number) => number =
//    function (x: number, y: number): number { return x + y; };
//-----------------------------------------------------
//inferring the types
//// myAdd has the full function type
//let myAdd = function (x: number, y: number): number { return x + y; };
//// The parameters 'x' and 'y' have the type number
//let myAdd: (baseValue: number, increment: number) => number =
//    function (x, y) { return x + y; };
//-----------------------------------------------------
//Optional and default parameters
//function buildName(firstName: string, lastName: string) {
//    return firstName + " " + lastName;
//}
//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
//let result3 = buildName("Bob", "Adams");         // ah, just right
//function buildName(firstName: string, lastName?: string) {
//    if (lastName)
//        return firstName + " " + lastName;
//    else
//        return firstName;
//}
//let result1 = buildName("Bob");                  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
//let result3 = buildName("Bob", "Adams");         // ah, just right
//function buildName(firstName: string, lastName = "Smith") {
//    return firstName + " " + lastName;
//}
//let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
//let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
//let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
//let result4 = buildName("Bob", "Adams");         // ah, just right
//function buildName(firstName = "Will", lastName: string) {
//    return firstName + " " + lastName;
//}
//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
//let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
//let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
//-----------------------------------------------------
//Rest parameters
//function buildName(firstName: string, ...restOfName: string[]) {
//    return firstName + " " + restOfName.join(" ");
//}
//let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
//class Handler {
//    info: string;
//    onClickBad(this: Handler, e: Event) {
//        // oops, used this here. using this callback would crash at runtime
//        this.info = e.message;
//    };
//}
//let h = new Handler();
////uiElement.addClickListener(h.onClickBad); // error!
//class Handler {
//    info: string;
//    onClickGood(this: void, e: Event) {
//        // can't use this here because it's of type void!
//        console.log('clicked!');
//    }
//}
//let h = new Handler();
//uiElement.addClickListener(h.onClickGood);
//class Handler {
//    info: string;
//    onClickGood = (e: Event) => { this.info = e.message }
//}
//-----------------------------------------------------
//overloads
//let suits = ["hearts", "spades", "clubs", "diamonds"];
//function pickCard(x): any {
//    // Check to see if we're working with an object/array
//    // if so, they gave us the deck and we'll pick the card
//    if (typeof x == "object") {
//        let pickedCard = Math.floor(Math.random() * x.length);
//        return pickedCard;
//    }
//    // Otherwise just let them pick the card
//    else if (typeof x == "number") {
//        let pickedSuit = Math.floor(x / 13);
//        return { suit: suits[pickedSuit], card: x % 13 };
//    }
//}
//let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
//let pickedCard1 = myDeck[pickCard(myDeck)];
//alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
//let pickedCard2 = pickCard(15);
//alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
