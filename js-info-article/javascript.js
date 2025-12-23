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
    alert(bag.appleReputationLevel)
} else if (brandConverted == "lenovo") {
    bag = {
        [brandConverted + 'ComputerCost']: "$1500",
        [brandConverted + 'ReputationLevel']: "4.5/5.0 star rating!",
    };
    alert(bag.lenovoComputerCost);
    alert(bag.lenovoReputationLevel)
}


