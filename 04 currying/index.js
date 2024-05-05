function op(para){
    return function(a){
        return function(b){
            return para === 'add' ? a+b :a-b;
        }
    }
}

const final = op('add')(4)(6);
console.log(final);



let add = a => b => c => a+b+c; //other way of currying