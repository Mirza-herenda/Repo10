var myFood=
{
    vegetable:"carrot",
    fruit:"orange",
    drink:"water"

}

function myFunction(myobj) 
{
    var vegetableValue=myobj["vegetable"];
    var fruitValue=myobj["fruit"];
    var drinkValue=myobj["drink"];   
    return {vegetableValue,fruitValue,drinkValue};
}
console.log(myFunction(myFood));
module.exports=myFunction(myFood);
