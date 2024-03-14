const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1,k=1,s="";
while(i<=n)
{
  let j=1;
    while(j<=k)
      {
         s=s+("*");
         j++;
      }
       s=s+("\n")
       k=k+2;
       i++;
} 
let p=n-1;
   i=0,k=5;
       while(i<p)
   {
       j=1;
        while(j<=k)
        {
         s=s+("*")
          j++;
        }
        s=s+("\n")
         k=k-2;
         i++;
   }
     console.log(s);