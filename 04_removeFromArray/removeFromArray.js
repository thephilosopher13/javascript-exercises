const removeFromArray = function(arr, ...args) {
    var filteredArray = arr.filter (item => !args.includes(item));
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
