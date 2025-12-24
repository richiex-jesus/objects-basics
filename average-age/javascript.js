let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let richard = { name: "Richard", age: 18};
let simon = { name: "Simon", age: 58}

let arr = [ john, pete, mary, richard, simon ];

function getAverageAge(arr) {
    let totalAge = 0;
    for (let person of arr) {
        totalAge += person.age;
    }
    let arrNum = arr.length;
    let averageAge = totalAge / arrNum;
    return `The average age is ${averageAge}!`
}

alert(getAverageAge(arr));