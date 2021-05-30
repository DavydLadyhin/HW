"use strict";

function createNewUser()
{
    this.firstName = prompt('Введите своё имя: ');
    this.lastName = prompt('Введите свою фамилию: ');
    this.birthday = prompt('Введите свой день рождения: ');
    this.getLogin = function(){
        let getLogin =(this.firstName.substr(0,1) + this.lastName).toLowerCase();
        return getLogin;
    }
    this.getAge = function(){
        let now = new Date();
        let cY = now.getFullYear();
        let vD = +this.birthday.substring(0,2);
        let vM = +this.birthday.substring(3,5);
        let vY = +this.birthday.substring(6,10);
        let bd = new Date(vY, vM-1, vD);
        let by = bd.getFullYear();
        let age = cY - by;
        if(now < new Date(bd.setFullYear(cY))){
            age = age -1;
        }
        return age;
    }
    this.getPassword = function(){
        let getPassword = (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.substring(6,10));
        return getPassword;
    }
    let newUser;
}
this.newUser = new createNewUser();
console.log(`Ваш логин: ${newUser.getLogin()}`);
console.log(`Ваш возраст: ${newUser.getAge()}`);
console.log(`Пароль: ${newUser.getPassword()}`);
