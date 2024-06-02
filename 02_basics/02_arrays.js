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
console.log(myallHeros) //we get ['Spiderman','thor','ironman','superman','batman','flash']

//Note .concat se arrays merge to honge but it's difficult to concat many array that's why we have a new method:-

//*****Spread method  */