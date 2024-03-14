const input = require("readline-sync");
let m=input.questionInt("enter the number: ");
let n=input.questionInt("enter the number: ");
let a=[];
let b=[];
let s=m+n;
let c=[];
let i=0;
while(i<m)
{
    a[i]=input.questionInt("enter the num for first array : ");
    i++;
}
let j=0;
while(j<n)
{
    b[j]=input.questionInt("enter the num for second array: ");
    j++;
}
// console.log(a);
// console.log(b);
let f=0;
while(f<s)
{
    c[f]=0;
    f++;
}
let d=0;
while(d<m)
{
    c[d]=a[d]
    d++;
}
let k=0;
while(d<s)
{
 c[d]=b[k]
 k=k+1;
 d++;
}
// console.log(c);
let r=0
while(r<s)
{
    let e=r+1;
    while(e<s)
    {
        if(c[r]>c[e])
        {
           [c[r],c[e]]=[c[e],c[r]]
        }
        e++;
    }
    r++;
}
console.log(c);