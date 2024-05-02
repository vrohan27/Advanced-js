// Clouser --------
// we can create nested function in javascript
// inner function take values by outer funciton

function createUser(name){
    let greeting = 'Hi ';
    function greet(){
        return greeting + name + 'is created';
    }
    return greet();
}
const ans = createUser('john');
console.log(ans);


function initCounter(){
    let count = 0;
    return function(){
       console.log(count++);
    }
}

let counter = initCounter();
counter(); //0
counter();  //1

let counter1 =  initCounter();
counter1(); //0
counter1(); //1