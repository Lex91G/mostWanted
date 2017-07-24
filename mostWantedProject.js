"use strict"


function alexInfo(){
	Var person1 = [
	name= alexander gardner,
	age = 25,
	height = 72
	occupation = bartender,
	eye color = brown	]
}

function kiongInfo(){
	var person2 = [
	name = kiong lao,
	age = 25,
	height = 72
	occupation = sales,
	eye color = brown ]
}


function displayUserInterface(){
	var userInput = prompt("What would you like to do?\n" +
					"Press 1 for age\n" +
					"Press 2 for height\n" +
					"Press 3 for weight\n" +
					"Press 4 for occupation\n" +
					"Press 5 for eye color\n" +
					"Press 6 for exit\n" +
					
	switch(userInput){
		case "1": 
				reverseString();
				break;
		case "2": 
				capitalizeFirstLetterOfEachWord("hello world my name is mike");
				break;
		case "3": 
				compressCharacters();
				break;
		case "4": 
				checkPalindrome();
				break;
		case "5":

		default: 
				console.log("Please choose a valid option");
				displayUserInterface();
				break;
	}
}

myArray= [ alexInfo, kiongInfo];
var mapResult = myArray.map(function(element)
	)
