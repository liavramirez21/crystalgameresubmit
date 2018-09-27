

/*THIS PICKS A RAND NUM FROM ARRA AND PRINTS TO CONSOLE*/
// Here we establish the "targetNumber" (set to 50 in this example).
var wins = 0;
var losses = 0;
var targetNumber = 0;
var targetGuess = 0;

var randNumbers = [ "19", "20", "21", "22", "23", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63",
"64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91"
, "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"]

start();

var crystalOne = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
var randomNumberOne = Math.floor(Math.random() * crystalOne.length);
$("#crystal1").click(function() {
    targetGuess += randomNumberOne;
    compareGuess2TargetNumber();
});

var crystalTwo = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
var randomNumberTwo = Math.floor(Math.random() * crystalTwo.length);
$("#crystal2").click(function() {
    targetGuess += randomNumberTwo;
    compareGuess2TargetNumber();
});

var crystalThree = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
var randomNumberThree = Math.floor(Math.random() * crystalThree.length);
$("#crystal3").click(function() {
    targetGuess += randomNumberThree;
    compareGuess2TargetNumber();
});

var crystalFour = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
var randomNumberFour = Math.floor(Math.random() * crystalFour.length);
$("#crystal4").click(function() {
    targetGuess += randomNumberFour;
    compareGuess2TargetNumber();
});

function start () {
    targetNumber = Math.floor(Math.random() * randNumbers.length);
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
}

function compareGuess2TargetNumber() {
    $("#scoreBoard").text(targetGuess);
    if (targetGuess === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#number-to-guess").empty();
        $("#scoreBoard").empty();
        targetNumber = 0;     
        targetGuess = 0;
        start();
    }
    else if (targetGuess >= targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#number-to-guess").empty();
        $("#scoreBoard").empty();
        targetNumber = 0;     
        targetGuess = 0;
        start();
    }
}
