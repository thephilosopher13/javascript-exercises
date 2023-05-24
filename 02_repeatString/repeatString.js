const repeatString = function(string, num) {
   let heyString = "";
   if (num < 0) {
    heyString += 'ERROR';
   } else {
    for (i = 1; i <= num; i++) {
        {
            heyString += string;
        }
       }
   }
   return heyString;
};

repeatString('hey', 10)

repeatString('hey', -1)

// Do not edit below this line
module.exports = repeatString;
