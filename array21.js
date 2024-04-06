const input = require("readline-sync");
let n = input.questionInt("Enter the size of array n: ");
let l = input.questionInt("enter the gap number:")
let a = [];
let i = 0;
let s;
let k = 0;

while (i < n) 
{
    a[i]=input.questionInt(`Enter the  element:`)
    i++;
}
i = 0;
while(k<n)
{
     s=0;
    while(s<l)
    {
        r=i%n;
        if(a[r]!=0)
        {
            s+=1;
        }
        i+=1;
    }
    console.log(a[r]);
    a[r]=0;
    k+=1
}