function validateData(){
    var email = document.getElementById("email");
    var telephone = document.getElementById("telephone")
    var agreement = document.getElementById("agreement")
    
    if(!email.value.endsWith("@gmail.com")){
        alert("Email has to ends with @gmail.com");
    }

    else if(telephone.value.length < 9){
        alert("Phone Number has to be between 9 and 13 character");
    } else if(telephone.value.length > 13){
        alert("Phone Number has to be between 9 and 13 character");
    }

    else if(!agreement.checked){
        alert("You have to agree to receive newsletter");
    }
    else{
        alert("Registration Successfull");
    }
}