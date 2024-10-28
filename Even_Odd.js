// Create a program to check if a number is even or odd.
// The program should ask the user for a number and then print out whether the number is even or odd.
const readlineSync = require('readline-sync');
let num = readlineSync.question("Enter a number to check even or odd: ");
// let num = prompt("Enter a number to check a even or odd: "); // this line is used for client side browser.

if(num%2==0){
    console.log(num + " is Even");
}else{
    console.log(num + " is Odd");
}