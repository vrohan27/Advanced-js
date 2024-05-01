// Block Scope & Global Scope 

//let --------
// This creates a block scope 
// re-declearation is not allowed (in same scope)
// re-assignment is allowed

{
    //block scope
    let x = 0;
    let y =0;
    console.log(x); //0
    // let x=1; //Error
}

// parents to chilld is allowed
// Hoisting not allowed


{
    //TDZ = temporal dead zone
    const hello = (msg) => console.log(msg);
    const msg = 'Hey!';
    hello(msg);
}


// --------------------------------------

// const ------------
// this creates block scope
// re-dclearation not allows
// re-assignation not allows
// must be assign at declearation time

{
    const hey = 'hello';
    console.log(hey);
}


//-------------------------------------

// variable shadowing

// let x = 0;
// {
//     let x=1;
//     console.log(x); // take nearest value
// }


// -----------------------------------

// var ------------
// It does'nt have  any block , and can be re-decleared
// it only had fucntion scope
// var are hosited, so they can be used before the declearation

var x = 1;
var x = 2;

console.log(y); //undefined
var y =3;

z = 4;
console.log(z); //4
var z;

//---------------------------------------

// let vs var
for(let i=0;i<5;i++){
    setTimeout(
        ()=>{console.log(i);},
    1000)
}
// 1,2,3,4,5

for(var i=0;i<5;i++){
    setTimeout(
        ()=>{console.log(i);},
    1000)
}


//---------------------

// lexical environment ----------

//--------------------

// Hoisting ---------

//-------------------





