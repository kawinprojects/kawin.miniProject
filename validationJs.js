
const nameSpan=document.getElementById("nameErr");
const emailSpan=document.getElementById("emailErr");
const numberSpan=document.getElementById("numberErr");
const heightSpan=document.getElementById("heightErr");
const weightSpan=document.getElementById("weightErr");
const dateSpan=document.getElementById("dateErr");

function validateName()
{
    let name = document.getElementById("name").value;
    if(!name.match(/^[a-z A-Z]*$/))
    {
        nameSpan.innerHTML="*Give Valid Name";
        return false;
    }
    if(name.length ==0)
    {
        nameSpan.innerHTML="*Give Any Name";
        return false;
    }
    else{
        nameSpan.innerHTML="";
        return true;
    }
    
}

function validateEmail()
{
    let email = document.getElementById("email").value;
    if(!email.match( /^[a-zA-Z0-9+_.]+@[a-zA-Z0-9.]+$/))
    {
        emailSpan.innerHTML="*Give Valid email";
        return false;
    }
    if(email.length ==0)
    {
        nameSpan.innerHTML="*Give Any email";
        return false;
    }
    else{
        emailSpan.innerHTML="";
        return true;
    }

}
function validateNumber()
{
    let number = document.getElementById("numbers").value;
    if(number.length ==0)
    {
        numberSpan.innerHTML="*Give Any number";
        return false;
    }
    if(number.length>11)
    {
        numberSpan.innerHTML="*Give valid number";
        return false;
    }
    else
    {
        numberSpan.innerHTML="";
        return true;
    }
}

function validateHeight()
{
    let height = document.getElementById("height").value;
    let number=parseInt(height);
    console.log(number);
    if(heightSpan.length ==0)
    {
        nameSpan.innerHTML="*Give Any height";
        return false;
    }
    if(!(number>=140 && number<=220))
    {
        heightSpan.innerHTML="*Valid height should be 140-220 cm";
        return false;
    }
    else
    {
        heightSpan.innerHTML="";
        return true;
    }
}

function validateWeight()
{
    let weight = document.getElementById("weight").value;
    let number=parseInt(weight);
    if(weight.length ==0)
    {
        weightSpan.innerHTML="*Give Any weight";
        return false;
    }
    if(!(number>40 && number<120))
    {
        weightSpan.innerHTML="*Valid weight should be 40-150 kg";
        return false;
    }
    else
    {
        weightSpan.innerHTML="";
        return true;
    }
}

function validateDate()
{
    let userDate = document.getElementById("date").value;
    let todaydate = new Date();
    if(userDate=='')
    {
        dateSpan.innerHTML="*Give any date";
        return false;
    }
    userDate = new Date(userDate);
    if((userDate>=todaydate))
    {
        dateSpan.innerHTML="*Give valid date";
        return false;
    }
    else
    {
        dateSpan.innerHTML="";
        return true;
    }
    
}

function book()
{
    validateName();
    validateEmail();
    validateNumber() ;
    validateDate();
    validateHeight();
    validateWeight()   ;
 if(validateName() && validateEmail() && validateNumber() && validateDate && validateHeight() && validateWeight())
 {
    alert("Successfully Booked");
 }
 else 
 {
    alert("Unsuccessfull ");
   
 }
}
