const input = require("readline-sync");
let n=input.question("enter the number: ");
let a=[]
let i=0;
let b=1;
while(i<n)
{
    a[i]=b;
    i++;
    b++;
}

    console.log(a);
    
