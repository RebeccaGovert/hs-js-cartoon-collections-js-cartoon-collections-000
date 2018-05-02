function dwarfRollCall(dwarves) {
  var myOutputLine= "";
  for (var i=0; i<dwarves.length; i++){
   myOutputLine += (i+1) + ". " + dwarves[i] + " ";
  }
return myOutputLine;
}
  
function summonCaptainPlanet(planeteerCalls){
  var myArray = [];
  for (var i=0; i<planeteerCalls.length; i++) {
 //   myArray[i]= planeteerCalls[i].toUpperCase + "!";
  myArray.push(planeteerCalls[i].toUpperCase + "!");
  }
  return myArray;
}

function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++){
    if (words[i].length > 4) {
      return true;
    }
    }
  return false;
}


function findTheCheese (foods) {
  for (var i=0; i<foods.length; i++) {
    if (foods[i] === "cheddar" ||
        foods[i] === "gouda" ||
        foods[i] === "camembert") {
          return foods[i];
        }        
        } 
  return "no cheese!";
}

