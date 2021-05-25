//Exo 1
function minMax(arr) {
return([Math.min(...arr) , Math.max(...arr)] )
}




//Exo 2
function isSameNum(num1, num2) {

return num1 === num2 
}




//Exo 3
function filterArray(arr) {
 return arr.filter((e) => typeof e === "number")

}


//Exo4

function getAbsSum(arr) {
return (arr.length > 1) ? (arr.reduce((x,y) => Math.abs(x) + Math.abs(y))) : Math.abs(arr)
}

// Exo5 

function countTrue(arr) {
	return  arr.filter(x=>x).length
	
}
// exo 6

function inkLevels(inks) {
    return Math.min(...Object.values(inks))

}
// exo 7 covert object to array

function objectToArray(obj) {
    return Object.entries(obj)
    }

 // exo 8 get sum object value
 
 function getBudgets(arr) {
    return arr.map(obj => Object.values(obj)[2]).reduce((acc, curr) => acc + curr);
   }

 // exo 9  Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
 
 function afterNYears(names, n) {
    for (key of Object.keys(names)) {
       names[key] += Math.abs(n);
     }
     return names;
   }

   // exo10  Write a function that takes in a name and returns a name tag, that should read: "Hi! I'm [name], and I'm from [country]."
   //If the name is not in the object, return: "Hi! I'm a guest."
   const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	 return GUEST_LIST[name]
    ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
    : "Hi! I'm a guest.";
}
