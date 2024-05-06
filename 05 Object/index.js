// Refernce Copying
let addressObject = {city:'Delhi',state: 'delhi'};

let Person = {
    name : 'john',
    address : addressObject
}

let sCopy = {...Person};
sCopy.name = 'X';
sCopy.address.city = 'Jaipur';
console.log(sCopy,Person);

//--------------------------------

//This method

// it is not work in strict method
// arrow functions do not allow this method
let person = {
    name : 'John',
    sayHi : function(){
        return console.log('Hi' + this.name); 
    }
}

person.sayHi();


// ------------------

//Symbol
// it is a data type
// for in loop ignores symbol

const id = Symbol('id');

let person2 = {
    name : 'John',
    [id]:1
}

let a = person2[id];
console.log(a);