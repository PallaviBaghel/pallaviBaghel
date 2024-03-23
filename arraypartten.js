const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let a=[]
let i=0;
while(i<n)
{
    a[i]=input.questionInt("enter the num: ");
    i++;
}
i=0;
while(i<n)
{
    console.log(">".repeat(a[i]));
    i++;
}