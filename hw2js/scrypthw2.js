"use strict";

let n = prompt('Введите число:', '10');
let arr = [];
for( var i = 1; i <= n; i++)
    {
        if(i % 5 == 0)
            arr.push(i);
    }
if(arr.length == 0)
    {
       console.log(`Sorry, no numbers`);
    }
else 
    {
        console.log(arr);  
    }