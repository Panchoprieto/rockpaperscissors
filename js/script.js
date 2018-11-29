// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    var userChoice = $("#imput").val();
    $("#userChoice").text(userChoice);
    randomNumber = Math.random();
    if(randomNumber < .33){
        computerChoice = "rock" ; 
    }
    else if(randomNumber > .33 && randomNumber < .66){
        computerChoice = "paper" ;
    }
    else {
        computerChoice = "scissors" ;
    }
    $("#computerChoice").text(computerChoice);


    if (computerChoice === userChoice){
    alert("Draw");
    }

    else if (computerChoice === "rock" && userChoice === "paper"){
    alert("You Win!");
    }

    else if (computerChoice === "paper" && userChoice === "scissors"){
    alert("You Win!");
    }

    else if (computerChoice === "scissors" && userChoice === "rock"){
    alert("You Win!");
    }

    else if (computerChoice === "rock" && userChoice === "scissors"){
    alert("You Lose!");
    }

    else if (computerChoice === "paper" && userChoice === "rock"){
    alert("You Lose!");
    }

    else if (computerChoice === "scissors" && userChoice === "paper"){
    alert("You Lose!");
    }
});