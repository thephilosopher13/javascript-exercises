const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return processedString.split("").reverse().join("") == processedString;
  };

/* 

my original solution but way way fucking longer

const palindromes = function (str) {
    const stringLettersNumbersOnly = str.replace(/[^\w]|_/g, '');
    const stringLowerCased = stringLettersNumbersOnly.toLowerCase()
    const halfLength = ((stringLowerCased.length)/2)
    
    function reverseString(a) {
        return a.split('').reverse().join('');
      }

    if (stringLettersNumbersOnly.length % 2 === 0) {
            var firstHalf = stringLowerCased.substring(0, halfLength)
            var secondHalf = stringLowerCased.substring(halfLength)
    } else {
            var firstHalf = stringLowerCased.substring(0, (Math.ceil(halfLength)))
            var secondHalf = stringLowerCased.substring(Math.floor(halfLength))
    }

    var secondHalfReversed = reverseString(secondHalf)

    if (firstHalf === secondHalfReversed) {
        return true; 
    } else {
        return false;
    }
}; */

// Do not edit below this line
module.exports = palindromes;


