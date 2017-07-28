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
    	noName(people, []);
        break;
    default:
      app(people); // restart app
        break;
  }
}

function wrongAnswer(people){
  var tryCriteria = prompt("Sorry, invalid answer.\n" +

      "1 = Search by criteria\n" +
      "2 = Try Again");

  switch (tryCriteria){
   case "1":
      noName(people);
       break;
   case "2":
      searchByName(people);
       break;

    }
}

function searchByName(people, person){
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
 return wrongAnswer();
}

function mainMenu(person, people){

   var displayOption = prompt("Information on " + person.firstName + " " + person.lastName  + 
     "\n 1 = Information \n 2 = Family \n 3 = Descendants \n 4 = Restart");

  switch(displayOption){
    case "1":
     getInfo(person, people);
        break;
    case "2":
     getFamily(person, people);
        break;
    case "3":
     var descendents = getDescendents(person, people);
     var results = "Descendants are: \n";
        for(var i = 0; i < descendents.length; i++){
          results += descendents[i].firstName + " " + descendents[i].lastName + "\n";
            }alert(results + "\n");
            mainMenu(person, people);
                break;
    case "4":
        app(people); // restart
         break;
    case "quit":
         return; // stop execution
    default:
         return wrongAnswer(); // ask again
  }
}

function getInfo(person, people){
		alert("Gender: " + person.gender + "\nDate Of Birth: " + person.dob + "\nHeight: "
	+ person.height + "\nWeight: " + person.weight + "\nEye Color: " + person.eyeColor);
		  return mainMenu(person, people);
}

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

function noName(people, results){

  var displayOption = prompt("Search by: \n" + "1 = Age \n" + "2 = Height\n" + "3 = Weight\n" 
    + "4 = Occupation\n" + "5 = Eye Color\n" + "6 = Back to main menu");

  switch(displayOption){
    case "1":
        findAgeCriteria(people);
        break;
    case "2":
        findHeightCriteria(people);
        break;
    case "3":
        findWeightCriteria(people);
        break;
    case "4":
        findOccupationCriteria(people);
        break;
    case "5":
        findEyeColorCriteria(people);
        break;
    case "6":
        app(people);
        return; 
    default:
        return (people); // ask again
  }   
}


function findAgeCriteria(people, results){
		
  var age = prompt("What old are they?");


  var findAgeCriteriaNow = people.filter(function(person){
		var ageResult = person.dob.split("/");
    if(doMathGettingAge(new Date(ageResult[2], ageResult[0], ageResult [1])) == age){
			var mathProblemAnswer= person.firstName + " " + person.lastName;
      alert(mathProblemAnswer);
      return true;
	}

		else { 
			return false;
    }
   

});
 if(findAgeCriteriaNow.length === 0){
  getOut(people);
}
return muiltipleSearch(people, findAgeCriteriaNow);
}

function findHeightCriteria(people){
	var tellHeight = prompt("How tall are they (inches)?");	

	var findHeightCriteriaNow = people.filter(function(person){
		if(tellHeight === person.height.toString()){
			return true;
		}
		else {
			return false;
		}
  
  });    

  var resultString = "";
	for(var i = 0; i < findHeightCriteriaNow.length; i++){


		resultString += findHeightCriteriaNow[i].firstName + " " + findHeightCriteriaNow[i].lastName + "\n";
    
	}	
      if(findHeightCriteriaNow.length === 0){
    getOut(people);
}
alert("So far found: " + " \n" + resultString + "\n");
return muiltipleSearch(people,findHeightCriteriaNow);
}

function findWeightCriteria(people){
	var tellWeight = prompt("How much do they weight?");	

	var findWeightCriteriaNow = people.filter(function(person){
		if(tellWeight === person.weight.toString()){
			return true;
		}
		else {
			return false;
		}



	});
      
  var resultString = "";
	for(var i = 0; i < findWeightCriteriaNow.length; i++){


		resultString +=findWeightCriteriaNow[i].firstName + " " + findWeightCriteriaNow[i].lastName + "\n";
	}	
     if(findWeightCriteriaNow.length === 0){
    getOut(people);
}
alert("So far found: " + resultString + "\n");
return muiltipleSearch(people, findWeightCriteria);
}


function findOccupationCriteria(people){
	var tellOccupation = prompt("What is their occupation?");	

	var findOccupationCriteriaNow = people.filter(function(person){
		if(tellOccupation === person.occupation.toString()){
			return true;
		}
		else {
			return false;
		}



	});
      
  var resultString = "";
	for(var i = 0; i < findOccupationCriteriaNow.length; i++){


		resultString += findOccupationCriteriaNow[i].firstName + " " + findOccupationCriteriaNow[i].lastName + "\n";
	}	

  

    if(findOccupationCriteriaNow.length === 0){
    getOut(people);
}
alert("So far found: " + resultString + "\n");
  return muiltipleSearch(people, findOccupationCriteriaNow);


}

function findEyeColorCriteria(people, results){
	var tellEyeColor = prompt("What color are their eyes?");	

	var findEyeColorCriteriaNow = people.filter(function(person){
		if(tellEyeColor === person.eyeColor.toString()){
			return true;
		}
		else {
			return false;
		}



	});
var resultString = "";
	for(var i = 0; i < findEyeColorCriteriaNow.length; i++){


		resultString +=findEyeColorCriteriaNow[i].firstName + " " + findEyeColorCriteriaNow[i].lastName + "\n";
	}	
  if(findEyeColorCriteriaNow.length === 0){
    getOut(people);
  }
  alert("So far found: " + resultString + "\n");
  return muiltipleSearch(people, findEyeColorCriteriaNow);
}

function getOut(people){
   var goBackHome = prompt("Sorry, invalid answer\n" + "1 = Main Menu\n" + "2 = Try another search");

switch (goBackHome){
  case "1":
      app(people);
      break;
  case "2":
      noName(people);
      break;
  default:
      getOut(people);
      break;

    }
}
//abs
function doMathGettingAge(age){
var delta = Date.now() - age.getTime();
var big = new Date(delta);

return Math.abs(big.getUTCFullYear() - 1970);

}
function muiltipleSearch(people, results){
var pickARoute = prompt("Use mutiple criteria \n 1 = Yes \n 2= No \n 3 = Exit");
switch (pickARoute){
  case "1":
    noName(results);
    break;
  case "2":
    noName(data, []);
    break;
  case "3":
    app(data);
    break;

    default:
    muiltipleSearch(people, results);
    break;

}
}

function getFamily(person, people){
getChildrenFamily(person, people);
getSpouse(person, people);
getParents(person, people);
getSiblings(person, people);
return mainMenu(person, people);
}
function getChildrenFamily(person, people){
var arrayChildren = [];
for(var i = 0; i < people.length; i++){
  for(var j = 0; j < people[i].parents.length; j++){
    if(person.id === people[i].parents[j]){
      arrayChildren.push(people[i].firstName + " " + people[i].lastName + "\n");
    }
  }
}if(arrayChildren.length > 0){

alert("Children: " + "\n" + arrayChildren + "\n")
return arrayChildren;
}
else{
  alert("No Children Found")
}


    ;
  }

function getSpouse(person, people){
  var personID = person.id
  var spouse;
  spouse= people.filter(function(element){
if(element.currentSpouse === personID)
  return true
    
else{
  return false;
  }
});



reportSpouse(spouse);

}

  

function reportSpouse(spouse){
  if (spouse.length>0) {
  var spouseName= spouse.map(function(element){
    var partnerName = element.firstName + " " + element.lastName
    alert("Spouse: " + "\n"  + partnerName + "\n");
  });
}
else{
  alert("No Spouse")
}
}

function getParents(person, people){
var parentsResult = people.filter(function(element){
  if(element.id === person.parents[0] || element.id === person. parents[1]){
    return true
}
else{
  return false
}
});
if(parentsResult.length > 0){
    var parentNames = parentsResult.map(function(element){
    return element.firstName + " " + element.lastName + "\n";
  });

alert("Parents: " + "\n" + parentNames + "\n")
return parentsResult;
}
else{
  alert("No Parents Found")
}
}
function getSiblings(person, people){
var getSiblingsResults = people.filter(function(element){
  if(element.id=== person.id){
    return false;
  }
  for(var i = 0; i < person.parents.length; i++){
    if(element.parents.includes(person.parents[i])){
      return true;
      }
    }
  });
if(getSiblingsResults.length > 0){
  var siblingsNames = getSiblingsResults.map(function(element){
    return element.firstName + " " + element.lastName + "\n";
  });
alert("Siblings: " + "\n" + siblingsNames  + "\n");
return getSiblingsResults;
}
else{
  alert("No Siblings Found")
}
}



function getDescendents(person, people){
  var personID = person.id;
  var children;
   children = people.filter(function(element){
    if(element.parents[0] === person.id || element.parents[1] === person.id){
    
        return true;

    }
    else{
      return false;
    }
  });
    
    if(children.length > 0){
      for(var child in children)
    children = children.concat(getDescendents(children[child], people));
      
    }
  return children; 
   }
   

  