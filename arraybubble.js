const input = require("readline-sync");
let n=input.question("enter the number: ");
let arr=[];
let i=0;
while(i<n)
{
    let a=input.questionInt("enetr the num: ")
    arr[i]=a;
    i++;
}
let j=0;
while(j<n-1)
{
    let k=0
    while(k< n-1-j)
    {
        if(arr[k]>arr[k+1])
        {
            p=arr[k];
            arr[k]=arr[k+1]
            arr[k+1]=p
        }
        k++;
    }
    j++;
}

console.log("sorted: ",arr);