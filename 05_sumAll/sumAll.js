const sumAll = function(num1, num2) {
    let sum = 0;
    let menor = num1;
    let mayor = num2
    
    if (num1 < 0 || num2 < 0 ||
        typeof(num1) != "number" ||
        typeof(num2) != "number" 
        ){
        return "ERROR"
    }

    if(num2 < num1){
        menor = num2;
        mayor = num1
    }

    console.log(menor, mayor)
    for (let i = menor ; i <= mayor ;i++) {
        sum += i    
    }

    return sum
};

console.log(sumAll(6, 4))

// Do not edit below this line
module.exports = sumAll;
