let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let richard = {name: "Richard", age: 18,}

let arr = [ pete, john, mary, richard ];

function arrSorter(a, b) {
    if (a.age < b.age) return -1;
    if (a.age == b.age) return 0;
    if (a.age > b.age) return 1;
}

function sortByAge(arr) {
    
    let arrSorted = arr.sort(arrSorter);
    alert(`${arrSorted[0].name}, ${arrSorted[0].age}!`);

    
    // let arrSorted = [
    //     john.age = {
    //         name: john.name,
    //     },
    //     pete.age = {
    //         name: pete.name,
    //     },
    //     mary.age = {
    //         name: mary.name,
    //     }
    // ]
    // alert(arrSorted[0].name);
    // alert(arrSorted[1].name);
    // alert(arrSorted[2].name);

    // this was my previous set of code....
    // I didn't realise that I actually needed to re-use the sort array method. 
    // also, I now know that you can access the values of objects which are part of arr using the keys of the object. 
}

sortByAge(arr);
