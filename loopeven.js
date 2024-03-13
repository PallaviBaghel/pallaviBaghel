const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1;
while(i<n)
{
    if(i%2==0)
    {
        console.log(i);
    }  i++;
}