const input=require("readline-sync");
let u = input.questionInt("enter the number: ");
if(u<=50)
{
    c=u*0.50;
    p=c*30/100;
    s=c+p;
    console.log(s);
}
else if (u<=150)
{
    c=(150-u)*0.75;
    e=c+(50*0.50)
    f=e*20/100;
    g=e+f;
    console.log(g);
}
else if(u<=250)
{
    c=(250-u)*1.20;
    e=c+(50*0.50)+(100*0.75)
    f=e*20/100;
    g=e+f;
    console.log(g);
}
else 
{
   c= (350-u)*1.50;
   e=c+(50*0.50)+(100*0.75)+(100*1.20)
   f=e*20/100;
   g=e+f;
   console.log(g);
 
}