const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1,s="";
while(i<=n)
{
    let j=1;
    while(j<=5)
    // while(j<=3)
    {
        s=s+("*");
        j++;
    } 
     s=s+("\n")
     i++;
}
  console.log(s);