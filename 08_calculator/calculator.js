const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length == 0) {
    return 0;
  }

	const arrSum = arr.reduce((acc, curr) => {
    return acc + curr;
  })
  return arrSum;
};

const multiply = function(arr) {
  if (arr.length == 0) {
    return 0;
  }

	arrSum = arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1)
  return arrSum;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }

  return product;
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
