
var myClothes=
{
    hat :"Fedora",
    shirt:"Nike",
    shoes:"Convers"
}
    function myFunction(myObj) 
    {
        var hatValue=myObj.hat;
        var shirtValue=myObj.shirt;
        var shoesValue=myObj.shoes;

        return {hatValue,shirtValue,shoesValue};
    }

    console.log(myFunction(myClothes));
    module.exports=myFunction(myClothes);