const input = require("readline-sync");
let n=input.questionInt("enter the number: ");
let count=0
while(n!=0)
     {
        n=Math.floor(n/10);
        count++;
     }
      console.log(count);