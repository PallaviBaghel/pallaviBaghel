const input =require("readline-sync")
let n=input.questionInt("enter the number: ");
let r=input.questionInt("enter the no: ");
let a=[]
for(let i=0; i<n; i++){
a[i]=input.questionInt("enter number")}

for(let i=0;i<r;i++)
{
    let l=a[n-1];
    for(let j=n-1;j>0;j--)
    {
        a[j]=a[j-1];
    }
      a[0]=l;
}
console.log(a);