const { stringMatching } = require("expect")

// Code your solution here

// Filter takes in an array and callback, while returning a new array//
//
/*@($&$@)*@$&*/

/*
This function takes an array of drivers' names and a string as 
arguments, and returns the matching list of drivers.
*/
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array,string){

     let driverMatching = array.filter(function(name){
         if(string ==  name){
             return true

         }

        if (name.toLowerCase()===string.toLowerCase()){
            return true 
        } else {
            return false 
        }


    })


    return driverMatching; 
} 
/* at the edge of ....*://www.w3schools.com/jsref/jsref_indexof.asp*/
/* return mataching driver name using filter and string*/
function fuzzyMatch(array, string){
    let fuzzieDrive = array.filter(function(names){
        return names.indexOf(string) === 0
    })
    return fuzzieDrive;
}
// it is the end of the world//

function matchName(drivers, string){
    let matDrivers = drivers.filter(function(names) {
        return names.name === string;

    })
return matDrivers
}   

