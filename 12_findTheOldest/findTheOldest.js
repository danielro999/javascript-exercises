const findTheOldest = function(people) {
    return people.reduce((mayor, person)=>{
      if (!mayor.yearOfDeath){
        mayor.yearOfDeath = new Date().getFullYear() 
      }
        return mayor.yearOfDeath - mayor.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? mayor : person
    })

};

console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
