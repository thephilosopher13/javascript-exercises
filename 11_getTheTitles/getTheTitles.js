const getTheTitles = function(arr) {
    const titleArray = []
    for (let key in arr) {
        var value = arr[key].title
        titleArray.push(value)
    }
    return titleArray
};

console.log(getTheTitles)
// Do not edit below this line
module.exports = getTheTitles;
