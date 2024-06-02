const myHeros=["spiderman","superman"]
// console.log(myHeros)
// console.log(myHeros[0])  //here we checking that on 0 index of myheros array me konsa element here


//+++++++++++++++++  METHODS OF ARRAY   +++++++++++++
//Array ko 2 tareeke se declare ker sakte hen as follow
const arrayname=[1,2,3,4] 
const AnArray= new Array(1,2,3,4,5,6)


const myArrName=[1,2,3,4,5,6,7,8,9,0]
myArrName.push(6)    //adds element 6 in the last of array 
//console.log(AnArray, arrayname)

//+++NOTE :- if we change in array then it will change also original array

myArrName.pop()    //removes the last element of the array 

myArrName.unshift(12) //adds element in start of the array but for this it will also shift the values

const newArry= myArrName.join()
// here join attribute changes the newArray to string and also change the type of array to string

// console.log(myArrName.includes(10)) // .includes use kerne se hume boolean value milegi true or False.
// .includes use kerne se hum question puch rahe hen k 10 array me available he?


const  ANewArray=[11,12,13,14,15]
// console.log(ANewArray.indexOf(15)) 
// here we asking that what is the index of 15 in the array..Ans is 4

// console.log(ANewArray.indexOf(17))
// agr hum esa element ki index puchen jo k array me ho ee na to Ans -1 ayega always


// ****Now we Slice and splice***

// const ArrForSliceSplice=[2,4,6,8,10]
// console.log(ArrForSliceSplice.slice(1,4)) // we get [2,6,8] mean 1 index se start karo of 4 index include ni kero..

// console.log("After slice", ArrForSliceSplice) //Note after using slice there will be no change in original array
 
 
//  console.log(ArrForSliceSplice.splice(1,4)) // here we get [4,6,8,10]
//  console.log("After using Splice",ArrForSliceSplice)  // here we get [2] means it splice change original Arrow and it also include last 4 index




