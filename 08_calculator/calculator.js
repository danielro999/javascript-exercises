const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	return a.reduce((total, number) => {return total + number},0)
};

const multiply = function(a) {
  return a.reduce((total, number) => total * number)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  let contador = a 
	if (a == 0) return 1
  else {
    for (let i = 1 ; i < a; i++ ){
     contador *= i     
    }
  }
  return contador
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
