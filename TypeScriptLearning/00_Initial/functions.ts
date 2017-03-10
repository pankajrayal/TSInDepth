//normal functions
function disp_details(id: number, name: string, mail_id?: string) {
    console.log('----------------------------------');
    console.log('---: Printing employee information :---')
    console.log('     -----------------------------')
    console.log('ID: ', id);
    console.log('Name: ', name);

    if (mail_id != undefined) {
        console.log('Email Id', mail_id);
    }
}

//rest parameters functions
function addNumbers(...nums:number[]){
var i;
var sum:number=0;

for(i=0;i<nums.length;i++){
    sum=sum+nums[i];
}
console.log('Sum of the numbers: ', sum);
}

//default parameters example
function calculate_discount(price:number, rate:number=0.50){
    var discount = price*rate;
    console.log('Discount Amount: ', discount);
}

//Anonymous function
var msg = function(){
return 'Hello World!';
}

console.log(msg());

//Anonymous function with parameters
var res = function(a:number, b:number){
    return a*b;
};

console.log(res(12,2));

//1.11 - The Function Constructor
var myFunction = new Function("a","b", "return a * b");
var x = myFunction(4,3);
console.log(x);

//----------------------------------------

//1.12 - Recursion and TypeScript Functions
//Recursion is a technique for iterating over an operation by having a function call to itself repeatedly until it arrives at a result. Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop.
function factorial(number){
    if(number<=0){//termination case
return 1;

    }else{
        return (number * factorial(number -1)); //function invokes itself
    }
};
console.log(factorial(6));

//----------------------------------------

//1.13 - Anonymous Recursive Function
(function (){
    var x = "Hello Holi!!";
    console.log(x);
})(); //the function invokes itself using a pair of parantheses()


///execution block start
//disp_details(123, 'Pankaj Rayal');
//disp_details(111, 'Bhaumik Rayal', 'bhaumik_rayal@outlook.com');

//addNumbers(1,2,3);
//addNumbers(10,10,10,10,10);

//calculate_discount(1000);
//calculate_discount(1000,0.30);
///execution block end