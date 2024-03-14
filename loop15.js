const input = require("readline-sync");
let n=input.question("enter the number: ");
let i=1, k=1,s=0;
while(i<=n)
{
    let j=1;
    while(j<=i)
    s=s+k;
    k=k+1;
    j++;
} s=s+("\n")
console.log(s);
i++;