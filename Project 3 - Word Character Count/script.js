/*
Bismillahir Rahmanir Rahim
Nafis Chowdhury
Project 3 - Word Character Count
script.js
Date - 03/31/2020
Time - 4:46 PM
*/





var character_count_with_spaces = 0;

document.querySelector("textarea").addEventListener("keypress", function(event){
    character_count_with_spaces++;
    var text = event.key;
    document.querySelector("h5").innerHTML = "Character Count With Spaces: " + character_count_with_spaces;
})

