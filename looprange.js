const input = require("readline-sync");
let m=input.questionInt("enter the number: ");
let n=input.questionInt("enter the number: ");
let r=0
let s=0;
while(m<=n)
{
    r=r+m
    m++;
} console.log(r);