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
        computerChoice = "rock"; 
    }
    else if(randomNumber > .33 && randomNumber < .66)
        computerChoice = "paper";
    }
});
