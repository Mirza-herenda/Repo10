
var myPet=
{
    species:"bulldog",
    name:"mrvica",
    legs:4,
    friends:["pahuljica","putin"]
}
function myFunction(myObj) 
{
return myObj;    
}

console.log(myFunction(myPet));
module.exports={myPet,myFunction};