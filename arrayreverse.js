const input = require("readline-sync");
let n=input.question("enter the number: ");
let a=[]
let i=0;
while(i<n)
{
    a[i]=input.questionInt("enter the num: ");
    i++;
}

i=n
while(i>=0)
{
    console.log(a[i]);
    i--;
}