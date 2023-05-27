const getTheTitles = function (array) {
    return array.map((book) => book.title);
  };

/* const getTheTitles = function(arr) {
    const titleArray = []
    for (let key in arr) {
        var value = arr[key].title
        titleArray.push(value)
    }
    return titleArray
}; 

above is orig solution, it's more complicated*/

// Do not edit below this line
module.exports = getTheTitles;
