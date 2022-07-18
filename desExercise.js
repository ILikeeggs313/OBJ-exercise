//what does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
//numPlanets = 8, yearNeptuneDiscovered = 1846

//2nd 
//DisoveryYear Will print:
//yearNeptuneDiscovered: '1846', yearMarsDiscovered: '1659'


//3rd
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
  getUserData({firstName: "Melissa"}) // ?
  getUserData({}) // ?
  //First will print Alejandro and purple
  //second will print mellisa and green
  //third will print name undeifned and green


//array
//1st
//first = "Maya"
//second = "Marisa"
//third = "Chi"

//2nd
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
console.log(raindrops) //will print raindrop on roses
console.log(whiskers) //will print whiskers on kittens
console.log(aFewOfMyFavoriteThings) //will print an array of 3 things

//3rd
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers) //will swap the indexes of 20 and 30, reverse

//ES2015 Refactoring

const obj = {
    numbers: {
        a: 1,
        b: 2,
    }
}
const {a, b} = obj.numbers;


//ES5 Array swap to ES2015 oneline-array swap
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

//race results

const raceResults = ([first, second, third, ...rest]) => 
({first, second, third, rest});