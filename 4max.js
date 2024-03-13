const input = require("readline-sync");
let a=input.questionInt("enter the num: ");
let b=input.questionInt("enter the num: ");
let c=input.questionInt("enter the num: ");
let d=input.questionInt("enter the num: ");
if(a>b && a>c && a>d)
{
    console.log(a);
}
 else if(b>c && b>d)
{
    console.log(b);
}
else if(c>d)
{
    console.log(c);
}  
else 
{
    console.log(d);
}