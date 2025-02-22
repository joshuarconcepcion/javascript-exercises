const sumAll = function(int1, int2) {
    let sum = 0;
    let min, max;

    if ((int1 < 0 || int2 < 0) || (!Number.isInteger(int1) || !Number.isInteger(int2))) {
        return "ERROR";
    }

    if (int1 < int2) {
        max = int2;
        min = int1;
    } else {
        max = int1
        min = int2;
    }

    for (let i = min; i <= max; i ++) {
        sum += i;
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
