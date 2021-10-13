const findTheOldest = function(arr) {
const newArr= arr.map(a=>{
    if(!('yearOfDeath' in a)){
        a['yearOfDeath'] = new Date().getFullYear()
        return a
   }else{
       return a
   }
}).sort((a,b)=>{
    const lastGuy = a.yearOfDeath - a.yearOfBirth
    const nextGuy = b.yearOfDeath - b.yearOfBirth
    return lastGuy > nextGuy ? -1 : 1
})

return newArr[0]
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


  console.log(findTheOldest(people))

module.exports = findTheOldest;
