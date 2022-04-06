var myPet = {
    species: "Bulldog",
    name: "mrvica",
    legs: 4,
    friends: ["Zelinski", "Putin"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };