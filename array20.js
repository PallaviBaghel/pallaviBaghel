// const input= require("readline-sync");
// let n=input.questionInt("enter the number: ");
// let s=input.questionInt("enter the num: ")
// let a=[]
// let i=0;
// while(i<n)
// {
//     a[i]=input.questionInt("num: ");
//     i++;
// }
// i=0;
// if(i<n)
// {
//     j=i+1
//     if (a[i]+a[j==s])
     
// }
const input=require("readline-sync")
let n=input.questionInt("Enter the size of array n:")
let array=[]
for(i=0;i<n;i++)
{
    array[i]=input.questionInt(`Enter the [${i}] element:`)
}
console.log(array);
let k=input.questionInt("Enter the sum of two elements:")

i=0;
while(i<n)
{
    j=i+1;
    while(j<n)
    {
        c=array[i]+array[j]
        if(c==k)
        {
            console.log(array[i],array[j]);
            
        }
        j++;
    }
    i++;
}