const input=require("readline-sync");
let S = input.questionInt("enter the number: ");
if(S<=10000)
{
    HRA=S*20/100;
    DA=S*80/100;
    GS=HRA+DA+S;
    console.log(GS);
}
else if(S<=20000)
{
    HRA=S*25/100;
    DA=S*90/100;
    GS=HRA+DA+S;
    console.log(GS);
}
else if (S>2000)
{
    HRA=S*30/100
    DA=S*25/100;
    GS=HRA+DA+S;
    console.log(GS);
}