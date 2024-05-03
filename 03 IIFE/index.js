// IIFE
// immediately involked function avoid re- declearation of variables inside it 

(function(){
var x= 1; //now its protected
})()
console.log(x); // error


(function(a){
var x = a;
console.log(x);
})(5)

