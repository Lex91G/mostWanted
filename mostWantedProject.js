"use strict"

  /*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    	searchByName(people);
    break;
    case 'no':
    // TODO: search by traits
    break;
    default:
    app(people); // restart app
    break;
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  var fullName = firstName + " " + lastName;
 
 for(var i = 0; i < people.length; i++){ 
 	var newFullName = people[i].firstName + " " + people[i].lastName;

 	if(newFullName === fullName){
		return mainMenu(people[i], people);
 	}
 	else{

 	}
 }
}

function searchByAge(people){
  var ageNumber = promptFor("What is the person's age?", chars);

  
}
 

 // Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    getInfo(person);
    break;
    case "family":
    getFamily(person, people);
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function getInfo(person){
		alert("Gender: " + person.gender + "Date Of Birth: " + person.dob + "Height: "
	+ person.height + "Weight: " + person.weight + "Eye Color: " + person.eyeColor);
		
}
function getFamily(person, people){
		var getParents = person.id;
		for(var i = 0; i > people.length;i++){
			for(var j = 0; j > people[i].parents.length; j++){
				if(people[i].parents[j]=== getParents){
					alert("The parents are " + people[i].parents[j]);
			}
		}		
	}
}
function getDescendants(){

}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function noName(){

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Search by characteristics");

  switch(displayOption){
    case "Age":
    getInfo();
    break;
    case "Height":
    // TODO: get person's family
    break;
    case "Weight":
    // TODO: get person's descendants
    break;
    case "Occuupation":
    // restart
    break;
    case "Eye Color":

    break;
    case "Quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function findAgeCriteria(people){
	var tellAge = Prompt("What age are they?");	

	var findAgeCriteriaNow = people.filter(function(person){
		if(tellAge === person.age){
			return true;
		}
		else {
			return false;
		}



	});

	for(var i = 0; i < findAgeCriteriaNow.length; i++){


		alert(people[i].firstName + " " + people[i].lastName);
	}

		

}


 
//mapResult = data.map(function(element)
	
