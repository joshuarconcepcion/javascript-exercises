const removeFromArray = function(array, ...values) {
    let newArray = array.filter(item => !values.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
