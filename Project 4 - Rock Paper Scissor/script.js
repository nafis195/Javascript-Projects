/*
Bismillahir Rahmanir Rahim
Nafis Chowdhury
Project 4 - Rock Paper Scissor
script.js
Date - 04/01/2020
Time - 6:07 PM
*/





// function to handle the actual program
function rpsGame(yourChoice){
    var humanChoice, deviceChoice;

    humanChoice = yourChoice.id;
    deviceChoice = randomChoice(randomNumber());
    results = winner(humanChoice, deviceChoice);
    message = displayMessage(results);
    frontEnd(yourChoice.id, deviceChoice, message);
}

// function to generate random number
function randomNumber(){
    return Math.floor(Math.random() * 3);
}

// function to generate random choice for device
function randomChoice(number){
    return ['rock', 'paper', 'scissor'][number];
}

// function to decide winner
function winner(userChoice, botChoice){
    var gameDatabase = {  // database to store different kinds of possible combination instead of using bunch of if-else statement
        'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5},
    }

    var userResult = gameDatabase[userChoice][botChoice];
    var deviceResult = gameDatabase[botChoice][userChoice];

    return [userResult, deviceResult];
}

// function to display final message
function displayMessage([userResult, deviceResult]){
    if(userResult === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if(userResult === 1){
        return {'message': 'You won!', 'color': 'green'};
    }
    else{
        return {'message': 'You tied!', 'color': 'orange'};
    }
}

// function to display the front-end action 
function frontEnd(userImage, deviceImage, finalMessage){
    var imageDatabase = {  // database to store all the images in one place
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    // removing all the elements 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    // creating div tag for each of the element
    var humanDiv = document.createElement('div');
    var deviceDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[userImage] + "'style='box-shadow: 0px 10px 58px rgba(37, 50, 223, 1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    deviceDiv.innerHTML = "<img src='" + imageDatabase[deviceImage] + "'style='box-shadow: 0px 10px 58px rgba(223, 38, 24, 1)'>"

    document.getElementById('display-div').appendChild(humanDiv);
    document.getElementById('display-div').appendChild(messageDiv);
    document.getElementById('display-div').appendChild(deviceDiv);
}