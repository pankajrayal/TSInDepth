var n = 5;
while (n < 5) {
    console.log('Entered while');
}
do {
    console.log('Entered do..while');
} while (n > 5);
console.log('Loop example: 2');
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log('The first multiple of 5 between 1 and 10 is : ' + i);
        break; //exit the loop if the first multiple is found
    }
    i++;
} //outputs 5 and exists the loop;
//Demo - Continue Statement
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log(' The count of odd values between 0 and 20 is: ' + count);
