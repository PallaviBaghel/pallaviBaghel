const input = require("readline-sync");
let l=input.question("enter the number: ");
let a=[]
let i=0;
while(i<l)
{
    a[i]=input.questionInt("enter the num: ");
    i++;
}
 i=0;
 while(i<l)
 {
    console.log(a[i]);
    i++;
 }