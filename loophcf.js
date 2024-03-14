const input = require("readline-sync");
let a=input.questionInt("enter the number: ");
let b=input.questionInt("enter the number: ");
 n = a*b;
 while(a%b!=0)
 {
    r=a%b;
    a=b;
    b=r;
 } 
 console.log(b,n/b);