const input = require("readline-sync");
let n=input.question("enter the number: ");
let a=[]
let i=0;
let s=0;
let s1=0;
while(i<n)
{
    a[i]=input.questionInt("enter the num: ");
    i++;
}
i=0;
while(i<n)
{
    if(a[i]%2==0)
    {
        s1=s1+a[i];
        i++;
    }
    else{
     s=s+a[i]
     i++;}
}
console.log(s,s1);