function getAge(birth,death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    const age = death - birth;
    return age;
}

const findTheOldest = function(arr) {
    const oldest = arr.reduce((max, person) => {
        const age = getAge(person.yearOfBirth, person.yearOfDeath);
        const maxAge = getAge(max.yearOfBirth, max.yearOfDeath);

        return age > maxAge ? person : max;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
