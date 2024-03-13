const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let s=0;
let i=1;
while(i<=n)
{
    a=1/i;
    s=s+a;
    i=i+1;
}
console.log(s);