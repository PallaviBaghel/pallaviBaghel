const input = require("readline-sync");
let y= input.questionInt("enter the num: ");
if(y%4==0 && y%100!=0 || y%100!=0 && y%400==0)
{
    console.log("leap year");
}
else
{
    console.log("not leap year")
}