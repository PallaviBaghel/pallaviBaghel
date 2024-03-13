const input=require("readline-sync");
let a = input.questionInt("enter the number: ");
if(a%2!=0)
{
    c = a*2;
    console.log(c);
}
else
{
    console.log(a);
}