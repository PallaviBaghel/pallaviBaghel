const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1,k=n,s="";
while(i<=n)
{
     let j=1;
     while(j<=k)
     {s=s+("*")
    j++;
     }
    s=s+("\n");
    k=k-1;
    i++;
} console.log(s);
