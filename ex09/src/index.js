var object=
{
    title:"Titanic",
    song :"My Heart will go On",
    genre:"drama",
    
    
}


function myFunction(myObj, checkProp)
 {
   
    if(myObj.hasOwnProperty(checkProp))
    {
    return myObj[checkProp];
    }
    return "not found";
    
    }
    console.log(myFunction(object,"title"));
    console.log(myFunction(object,"song"));
    console.log(myFunction(object,"genre"));
    console.log(myFunction(object,"actor"));
    module.exports = myFunction;