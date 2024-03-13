const input=require("readline-sync");
let a = input.questionInt("enter the num: ");
let b = input.questionInt("enter the num: ");
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);