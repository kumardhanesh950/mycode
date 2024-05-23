let name ="Dhanesh"
let repoCount =50
console.log(name + repoCount +"value") //This is old method to declare an string and concat

console.log(`hello my name is  ${name} and my repoCount is ${repoCount} `);

// let Fullname ="Dhanesh kumar"
// console.log(Fullname)
let Fullname = new String("Dhanesh") // here is string is declared as a object and we can also check it by below method
//console.log(Fullname.__proto__) // return the result {} which is known as object
//console.log(Fullname.length)// returns the 7 result
//console.log(Fullname[0])// we can also check on 0 index which elemant of string is.
//console.log(Fullname.substring(0,4))// here 0,4 mean start konsi index se kerna he, 4 means 0 se kitne elements lene hen..total number of values

let myname ="hi dhanesh"
//console.log(myname)
//console.log(myname.trim())    //.trim() removes the extra spaces
//console.log(myname.charAt(3));  //the out is  d
let firstName ="Dhaneshh"
let lastName ="Kumar"
console.log(firstName.concat(" ",lastName)) //.concat() is used for adding to strings

