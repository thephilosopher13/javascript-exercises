const reverseString = function(string) {
    var reversedString = ""
    for (i = (string.length-1) ; i >= 0; i--) {
        const stringSlicer = string.slice(i, i + 1)

        reversedString += stringSlicer
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
