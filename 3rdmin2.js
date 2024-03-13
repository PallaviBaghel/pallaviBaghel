const input = require("readline-sync");
let a=input.questionInt("enter the num: ");
let b=input.questionInt("enter the num: ");
let c=input.questionInt("enter the num: ");
if( a>b )
{
    l=a
    s=b
}
else
{   l=b
    s=a
}
if(l>c)
{
    l1=l
    s1=c
}
else
{
    l1=c
    s1=l
}
if(s>s1)
{
    console.log(s);
}
else
{
    console.log(s1);
}