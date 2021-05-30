"use strict";

let fn = +prompt('Введите первое число: ', '5');
let sn = +prompt('Введите второе число: ', '8');
let mo = prompt('Введите операцию: ');
function res(fn, sn, mo)
{
    switch(mo)
        {
            case '+':
                return fn + sn;
            case '-':
                return fn - sn;
            case '*':
                return fn * sn;
            case '/':
                return fn / sn;
        }
}
console.log(res(fn, sn, mo));