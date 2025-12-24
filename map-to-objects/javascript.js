let user1 = {
    name: "Peter",
    surname: "Rock", 
    id: "T1295723Z",
}

let user2  = {
    name: "James",
    surname: "Little",
    id: "T18274183Z",
}

let user3 = {
    name: "John",
    surname: "The Beloved",
    id: "T7777777Z",
}

let arrUsers = [ user1, user2, user3 ];

let arrUsersMapped = [
    {fullName: `${user1.name} ${user1.surname}`, id: user1.id},
    {fullName: `${user2.name} ${user2.surname}`, id: user2.id},
    {fullName: `${user3.name} ${user3.surname}`, id: user3.id}
]

alert(arrUsersMapped[0].id);
alert(arrUsersMapped[1].fullName);
alert(`${arrUsersMapped[2].fullName}, ${arrUsersMapped[2].id}`);