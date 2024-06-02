// How to merge two arrays ?
const Marvel_heros=["Spiderman", "thor","ironman"]
const Dc_Heros=["Superman", "batman", "flash"]
// Marvel_heros.push(Dc_Heros)
// console.log(Marvel_heros) 
// we get ['Spiderman','thor','ironman'['Superman','batman',flash]] mtlb jese k hume pta array me hum sare types k data enter ker sakte hen like string , numbers, arrays k under arrays ,objects etc. 

//isliye is ne array ko as a element of array liya he 

// we can access the values of inside array by :-
// console.log(Marvel_heros[3][1])

const myallHeros =Marvel_heros.concat(Dc_Heros)
// console.log(myallHeros) //we get ['Spiderman','thor','ironman','superman','batman','flash']

//Note .concat se arrays merge to honge but it's difficult to concat many array that's why we have a new method:-

//*****Spread Operator*****

const allNewHeros= [...Marvel_heros,...Dc_Heros] // by using spread operator we can concat multiple arrays in single array
// console.log(allNewHeros)


const anotherArray =[1,2,[3,4 ,[4,5,6 ,[7,8],[9,10]]]]
const realArray=anotherArray.flat(Infinity)     //.flat arrays k under arrays ko single array me convert kerta h
// console.log(realArray)

console.log(Array.isArray("hitesh")) // here is array is used to ask that hitesh is an array? it returns false (boolean value)
console.log(Array.from("hitesh"))  // here we get ['h','i','t','e','s','h'] converted the string into array
console.log(Array.from({name :"hitesh"})) //here we get []empty array we hum ne btaya ni k array kis ka bana he keys ka values ka etc


let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1, score2,score3)) // here we can make array of multiple elements


