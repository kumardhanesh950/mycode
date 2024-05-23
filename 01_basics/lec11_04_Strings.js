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


//++++++++++++++++++++++Math Portion++++++++++++++++++++++++++++++++

// console.log(Math.abs(-5)); // Math.abs() change the -ve value in to +ve
// console.log(Math.round(4.56)); //Math.round() changes the decimal value into a number
// console.log(Math.ceil(4.001))// Math.ceil() se hume upper value milegi..means agr 4 se bhale age 4.1 or 4.001 value to ceil usko 5 me change karega
// console.log(Math.floor(4.6))// agr value bhale 4.99 ho per yeh value ko 4 return karega
// console.log(Math.min(3, 19,13,11,2,1,0.5,0.3))// Math.min() se hume aray me lowest value milegi
// //similarly we have
// console.log(Math.max(1,3,8,2,9,10,8,11,34,29))// return se highest value in array

console.log(Math.random()); // Math.random() returns a random between 0 and 1
const min =10;
const max =20;
// console.log(Math.floor(Math.random()*(max-min+1))+min)