'use strict';

function ArrMas(list) {
    let arr = [];
    let new_arr = [];
     document.querySelector('.cont').innerHTML = `<ul class = "mas"></ul>`;
        for(let key in list){
        arr.push(list[key]);
                new_arr = arr.map(obj => `<li>--> ${obj}</li>`);;  
            document.querySelector('.mas').innerHTML = new_arr.join(''); 
    }
}
ArrMas( ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);