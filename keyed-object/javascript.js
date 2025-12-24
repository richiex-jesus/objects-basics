let arrUsers = [
    {id: "john", name: "John Smith", age: 18},
    {id: "ray", name: "Ray Matias", age: 8},
    {id: "samuel", name: "Samuel Ng", age: 17}
]

function groupById(arrUsers) {
    let userById = {};
    for (let user of arrUsers) {
        userById[user.id] = user;
        console.log(userById[user.id]);
    }
    console.log(userById)
}

groupById(arrUsers);