const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
if(n%1!=0)
{
    console.log("not prime number");
}
console.log("prime number");