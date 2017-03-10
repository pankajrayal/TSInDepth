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

///execution block start
//disp_details(123, 'Pankaj Rayal');
//disp_details(111, 'Bhaumik Rayal', 'bhaumik_rayal@outlook.com');

//addNumbers(1,2,3);
//addNumbers(10,10,10,10,10);

calculate_discount(1000);
calculate_discount(1000,0.30);
///execution block end