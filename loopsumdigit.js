const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1,s=0;
while(n>0)
{

        d=n%10;
        s=s+d;
        n=Math.floor(n/10);
        i++;
    }
       console.log(s);