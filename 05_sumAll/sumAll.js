const sumAll = function(num1, num2) {
   var sum = 0;
   const isNotNumber = function(value) {
      return typeof value !== 'number' || Number.isNaN(value);
   };
   if (num1 < 0 || num2 < 0 || isNotNumber(num1) || isNotNumber(num2)) {
     sum = 'ERROR';
   } else if (num1 <= num2) {
      for (let i = num1; i <= num2; i++) {
        sum = sum + i;
      }
    } else {
      for (let i = num2; i <= num1; i++) {
        sum = sum + i;
      }
    }
   return sum;
 };
 
// Do not edit below this line
module.exports = sumAll;
