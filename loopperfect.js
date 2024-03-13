const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1;
let s=0;
while(n>i)
{
    if(n%i==0)
    {
        s=s+i;
        
    }i++;
} 
 if(n==s)
{
    console.log(" perfect number");
}
else
{
 console.log(" not perfect number");
}