function validate()
{
    var numberEntered = document.getElementById("numberBox");
    
    if(numberEntered.checkValidity()== false)
    {
        document.getElementById("demo").innerHTML=numberEntered.validationMessage;
    }
    else{
        document.getElementById("demo").innerHTML="input OK";
    }
}