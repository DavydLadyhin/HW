"use strict";

function createNewUser()
{
    this.firstName = prompt('Введите своё имя: ');
    this.lastName = prompt('Введите свою фамилию: ');
    this.getLogin = function(){
        let getLogin =(this.firstName.substr(0,1) + this.lastName).toLowerCase();
        return getLogin;
    }
    let newUser;
}
this.newUser = new createNewUser();
console.log(`Ваш логин: ${newUser.getLogin()}`);
