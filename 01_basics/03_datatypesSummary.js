//datatypes: Datatypes are categories on basis of how data is stored in memory and how it recalled.
// there are two types of data
//#01 Premitive 
// There are 07 types of premitive datatypes
// string, number,boolean, null, undefined,BigInt, symbol

//#02 Non-premitive
//Array, Objects, Functions



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// How memory works in javascript?

//==> There are two types of memories 
//(1) Stack (stack memory ka mtlb he he jab be hum variable declare kerte hen to hum uska copy milta he mean value me koi change karenge to original value me koi change ni ayega)
//(2) Heap (Heap memory ka mtlb he hume original value ka reference milta he mean agr value me koi change karenge to original value me change ayega)
//* As we know that there are two types of data => Primitive and Non-Primitive
// for Primitive data stack memory is Used
// for non-Primitve data Heap memory is used

//example 01 stack

let name ="Dhanesh"
let anothername ="Dhanu"
// console.log(anothername)
anothername= "Vishal"
console.log(anothername)
console.log(name)
// note here original value me koi change ni aya balke copy value me change aya which was Dhanu


//example 2 heap
 
let user={
    name :"Dhanesh kumar",
    city :"TandoAdam"
}
let user2 =user
user2.city= "karachi"
console.log(user.city);
console.log(user2.city);
 //note here original value me change hogya
 