const add = function(a,b) {
  return (a + b);
};


const subtract = function(a,b) {
	return (a >= b ? (a - b): b - a);
};

const sum = function(arr) {
	if (Array.isArray(arr)) {
    return arr.reduce((sum, current) => sum + current, 0);
  } 
};

const multiply = function(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((multiply, current) => multiply * current);
  } 
};

const power = function(a,b) {
	return (a ** b);
};

const factorial = function(n) {
  let factorialResult = 1

  for (let i = 2; i <= n; i++) {
    factorialResult *= i
  }

  return factorialResult
	
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

add.reduce 