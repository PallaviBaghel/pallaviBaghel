const input = require("readline-sync");
let n=input.question("enter the number: ");
let i=1;
let s=""
while(i<=n)
{
    let j=1;
    while(j<=i)
    {
        s=s+("*")
        j=j+1;
    }
    s+=("\n");
    i++;
}console.log(s);