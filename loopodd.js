const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1;
let s=0;
while(i<n)
{
    if(i%2!=0)
    {
        s=s+i;
        i++;
    }  i++;
} console.log(s);