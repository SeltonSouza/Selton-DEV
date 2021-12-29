
// Dynamic Age
const today = new Date();
const birthday = new Date("1999/01/19");
const year = today.getFullYear();
const myAge = Math.floor(Math.abs(today - birthday) / 1000 / 60 / 60 / 24 / 365);
document.querySelector("#age").innerHTML = myAge;