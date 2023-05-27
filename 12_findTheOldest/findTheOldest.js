const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentage = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentage ? currentPerson : oldest;
    });
};


const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
