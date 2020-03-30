/*
Bismillahir Rahmanir Rahim
Nafis Chowdhury
Project 1 - You Age in Days
script.js
Date- 03/29/2020
Time- 1:47 AM
*/





function ageInDays(){
    var yourBirthYear = prompt("What is your birth year?");
    var todayYear = prompt("What is today's year?");
    var result = (todayYear - yourBirthYear) * 365;
    var h1 = document.createElement("h1");
    var answerAge = document.createTextNode("You are " + result + " days old.");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(answerAge);
    document.getElementById('answer').appendChild(h1);
}

function reset(){
    document.getElementById('answer').remove();
}