let userAdmin = {
    name: "Richard",
    age: 18,
    school: "Raffles Institution",
    religion: "Catholicism",
    "relationship status": "single",
};

// console.log(userAdmin.religion);
// console.log(userAdmin.name);
// console.log(userAdmin.school);
// console.log(userAdmin["relationship status"]);

delete userAdmin.school;

// if (userAdmin.school == null) console.log('removed!');

delete userAdmin["relationship status"];
// if (userAdmin["relationship status"] == null) console.log('success!');

userAdmin['relationship status'] = "single";
// console.log(userAdmin['relationship status']);

// let key = prompt("What would you like to know about the admin today?")

// alert(userAdmin[key]) // prediction: alerts "Richard" if name is chosen, alerts "Catholicism if religion is chosen".

// let brand = prompt("Which computer brand would you like to buy?");
// let brandConverted = brand.toLowerCase();

// if (brandConverted == "apple") {
    
//     bag = {
//         [brandConverted + "ComputerCost"]: '$2000',
//         [brandConverted + "ReputationLevel"]: "5.0/5.0 star rating!",
//     };
//     alert(bag.appleComputerCost);
//     alert(bag.appleReputationLevel);

// } else if (brandConverted == "lenovo") {
    
//     bag = {
//         [brandConverted + 'ComputerCost']: "$1500",
//         [brandConverted + 'ReputationLevel']: "4.5/5.0 star rating!",
//     };
//     alert(bag.lenovoComputerCost);
//     alert(bag.lenovoReputationLevel);

// }

// either THIS
function makeUser(name, age, religion) {
    return {
        name: name,
        age: age,
        religion: religion,
    }
}

let newUser = makeUser("Richard", 18, "Catholicism");
// alert(newUser.religion);
// alert(newUser.name);
// alert(newUser.age);

// or THIS
function remakeUser(name, age, religion) {
    return {
        name,
        age,
        religion,
    }
}
let newUserTwo = remakeUser("Darryl", 18, "freethinker");
// alert(newUserTwo.religion);
// alert(newUserTwo.name);
// alert(newUserTwo.age);


// no such restrictions as no 'for', 'let' or 'return' keys....
// let newObjectOne = {
//     for: 1,
//     let: 2,
//     return: 3,
//     if: 4,
// }

// alert(newObjectOne.for * newObjectOne.let * newObjectOne.return * newObjectOne.if);

// let newObjectTwo = {
//     0: 1,
//     1: 2,
//     2: 3,
// }

// if (newObjectTwo[0] + newObjectTwo["1"] + newObjectTwo[2] == 6) {
//     alert("true!");
// } else {
//     alert("ERROR!");
// }

let preliminaryResults = {
    math: 77,
    chem: 72,
    phy: 72,
    econs: 45,
}

alert("econs" in preliminaryResults);
alert("geography" in preliminaryResults);
alert("math" in preliminaryResults);

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA",
}

for (let code in codes) {
    console.log(code);
}

let person = {
    name: ["Richard", "Matias"],
    age: 18,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old!`)
    },
    introduceSelf: function () {
        console.log(`Hi! My name is ${this.name[0]} ${this.name[1]}!`)
    }
}

let test = {
    name: {
        first: "Shealyn",
        last: "Tan"
    }
}
console.log(test.name.first);
console.log(test["name"]["last"]);

// test.name.first = "Richard";
// console.log(test["name"]["first"]);
// test["name"]["last"] = "Matias";
// console.log(test.name.last)

test["religion"] = "Catholicism"
test.farewell = function () {
    console.log(`Goodbye, ${test.name.first} ${test["name"]["last"]}!`)
}













