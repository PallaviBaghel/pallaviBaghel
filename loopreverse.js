const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let s=0;
while(n>0)
{
    d=n%10;
    n=Math.floor(n/10);
    s=(s+d)*10;
}  s=Math.floor(s/10)
console.log(s);