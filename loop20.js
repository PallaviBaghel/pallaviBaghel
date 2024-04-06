const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let i=1,s="";
while(i<n)
{
    let j=1;
     while(j<=i)
     {
        if(j==1)
        {
            s=s+("*")
            j++;
        } else if(j==i)
           {
              s=s+("*")
              j++;
           }  
           else
           {
             s=s+(" ")
             j++;
           }
     }  
          s=s+("\n")
          if(i==n)
          {
            j++;
          }
          else
          {
            i++;
          }
} 
    while(i>0)
{
  s+=("*")
  i--;
}
console.log(s);



