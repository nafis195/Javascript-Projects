/*
Bismillahir Rahmanir Rahim
Nafis Chowdhury
Project 2 - Cat Generator
script.js
Date - 03/30/2020
Time - 1:37 AM
*/





function catGenerate(){
    var image = document.createElement('img');
    var div = document.getElementById('show-cat');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}