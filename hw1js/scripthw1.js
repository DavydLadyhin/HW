"use strict";

let user;
let age;
do{
    user = prompt('Здравствуйте, как вас зовут?', 'Davyd');
}
while(!user.match(/^[A-Za-z]+$/));
do{
      age = prompt('Сколько вам лет?', '18');
      }
while(!parseInt(age));
if(age<18){
        alert(`You are not allowed to visit this website`);
    }
else if(age >=18 && age <=22){
        let ques = confirm("Are you sure you want to continue?");
if(ques == true){
    alert(`Welcome, ${user}`);
}
    else {
        alert('You are not allowed to visit this website');
    }}
else {
    alert(`Welcome, ${user}`);
}