const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let m=input.questionInt("enter the check num: ")
let a=[]
let i=0;
while(i<n)
{
    a[i]=input.questionInt("enter the num: ");
    i++;
}
i=0;
let c=0;
while(i<n)
{
    if(a[i]==n)
    c=1;
    i++;
}
 if(c==1)
 {
    console.log("exist num: ");
 }
  else
  {
    console.log("not exist num: ");
  }