let userAdmin = {
    name: "Richard",
    age: 18,
    school: "Raffles Institution",
    religion: "Catholicism",
    "relationship status": "single",
};

console.log(userAdmin.religion);
console.log(userAdmin.name);
console.log(userAdmin.school);
console.log(userAdmin["relationship status"]);

delete userAdmin.school;

if (userAdmin.school == null) console.log('removed!');

delete userAdmin["relationship status"];
if (userAdmin["relationship status"] == null) console.log('success!');

userAdmin['relationship status'] = "single";
console.log(userAdmin['relationship status']);

// let key = prompt("What would you like to know about the admin today?")

// alert(userAdmin[key]) // prediction: alerts "Richard" if name is chosen, alerts "Catholicism if religion is chosen".

let brand = prompt("Which computer brand would you like to buy?");
let brandConverted = brand.toLowerCase();

if (brandConverted == "apple") {
    
    bag = {
        [brandConverted + "ComputerCost"]: '$2000',
        [brandConverted + "ReputationLevel"]: "5.0/5.0 star rating!",
    };
    alert(bag.appleComputerCost);
    alert(bag.appleReputationLevel);

} else if (brandConverted == "lenovo") {
    
    bag = {
        [brandConverted + 'ComputerCost']: "$1500",
        [brandConverted + 'ReputationLevel']: "4.5/5.0 star rating!",
    };
    alert(bag.lenovoComputerCost);
    alert(bag.lenovoReputationLevel);

}

// either THIS
function makeUser(name, age, religion) {
    return {
        name: name,
        age: age,
        religion: religion,
    }
}

let newUser = makeUser("Richard", 18, "Catholicism");
alert(newUser.religion);
alert(newUser.name);
alert(newUser.age);

// or THIS
function remakeUser(name, age, religion) {
    return {
        name,
        age,
        religion,
    }
}
let newUserTwo = remakeUser("Darryl", 18, "freethinker");
alert(newUserTwo.religion);
alert(newUserTwo.name);
alert(newUserTwo.age);


// no such restrictions as no 'for', 'let' or 'return' keys....
let newObj = {
    for: 1,
    let: 2,
    return: 3,
    if: 4,
}

alert(newObj.for * newObj.let * newObj.return * newObj.if);

