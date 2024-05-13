/*

Write a program, take two sorted arrays from the user as input and find the Union and Intersection of the arrays.

Test Case1:
Input:
1 3 4 5 7
2 3 5 6
Output:
[1, 2, 3, 4, 5, 6, 7]
[3, 5]

*/

const input=require("readline-sync")
let m=input.questionInt("Enter the value of m:")
let arr=[]
for(i=0;i<m;i++)
{
    arr[i]=input.questionInt(`Enter the [${i}] element:`)
}
console.log(arr);

let n=input.questionInt("Enter the value of n:")
let arr1=[]
for(j=0;j<n;j++)
{
    arr1[j]=input.questionInt(`Enter the [${j}] element:`)
}
console.log(arr1);

i=0; 
j=0;
let Union=[];
let Intersection=[];
let u=0;
let k=0;
while(i<m)
{
    while(i<n)
    {
        if(arr[i]==arr1[j])
        {
            Union[u]=arr[i]
            Intersection[k]=arr[i]
            u++
            k++
            i++
            j++
        }
        if(arr[i]<arr1[j])
        {
            Union[u]=arr[i]
            u++;
            i++
        }
        else
        {
            Union[u]=arr1[j]
            u++;
            j++;
        }
    }

    if(i<m)
    {
        Union[u]=arr[i]
        u++;
        i++;
    }

}

console.log("Intersection is:",Intersection);
console.log("Union is:",Union);
