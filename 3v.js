const input=require("readline-sync");
let a = input.questionInt("enter the num: ");
let b = input.questionInt("enter the number: ");
c=a;
a=b;
b=c;
console.log(a,b);