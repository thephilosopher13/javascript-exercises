const fibonacci = function(n) {
    const num = Number(n);
    const fibonacciArray = [0, 1];


    for (let i = 2; i <= num; i++) {
        fibonacciArray.push((fibonacciArray[i-1] + (fibonacciArray[i-2])));
    }

    if (n < 0) {
        return 'OOPS';
    } else {
        return fibonacciArray[num]
    }


};

// Do not edit below this line
module.exports = fibonacci;
