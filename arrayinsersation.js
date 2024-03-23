const input = require("readline-sync");
let n=input.question("enter the number: ");
let arr=[];
let z=n-1;
let x;
let i=0;
while(i<n)
{
    let a=input.questionInt("enter the num: ")
    arr[i]=a;
    i++;
    
}   
while(z>0)
{
    i=0;
    while(i<n)
    {
        if (arr[i]>arr[i+1])
        {
            x=arr[i];
            arr[i]=arr[i+1]
            arr[i+1]=x;
            i++;
        }
        else{
        i++;}
    }
      z=n-1;
}console.log(arr);
// i=0
// if(i<n)
// {
//     console.log(arr);
//     i++;
// }