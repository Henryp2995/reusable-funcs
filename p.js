let array = [5, 10, 15, 20, 25]
function add(x) {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
let addition = add()
console.log(add(array))

function CalcAverage(x){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    let average = sum / array.length
    return average
}
let averageCalc = CalcAverage()
console.log(CalcAverage(array))

let strings = ["one", "two", "three", "four", "nineteen"];

function longestElement(array) {
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}

let longestString = longestElement(strings); 
console.log(longestString);

let secondArray = ["one", "two", "three", "four", "nineteen", 7]

function stringsLongerThan(array, length) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            result.push(array[i]);
        }
    }

    return result;
}

let longerThan7 = stringsLongerThan(secondArray, 7);
console.log(longerThan7);

let arrayOfName= [ 
    { id: "42", name: "Bruce",    occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
    let sortedArray = arrayOfName.sort(function(a, b) {
        return (a.age) - (b.age);
      });
      
      console.log(sortedArray)
      
let filteredArray = [];


for (let i = 0; i < arrayOfName.length; i++) {
  if (arrayOfName[i].age < 50) {
    filteredArray.push(arrayOfName[i]);
  }
}

console.log(filteredArray)

let mappedArray = arrayOfName.map(function(person) {
    return {
      name: person.name,
      age: person.age + 1,
      job: person.occupation
    };
  });
  
  console.log(mappedArray)


let sumOfAges = arrayOfName.reduce(function (sum, person) {
    return sum + person.age
  })
  
  let averageAge = sumOfAges / arrayOfName.length
  
  console.log("Sum of Ages:", sumOfAges)
  console.log("Average Age:", averageAge)