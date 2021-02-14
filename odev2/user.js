let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let userName = document.getElementById("userName");
let pass = document.getElementById("pass");
let conPass = document.getElementById("confirmPass");
let submit = document.getElementById("submit");
let alertMessage = document.getElementById("registerForm");
let messageDiv = document.createElement("div");
let first,last ="";

firstName.addEventListener("keyup", function(){

    first=firstName.value;
    userName.value=("@"+first+last).toLowerCase();  

});

lastName.addEventListener("keyup", function(){

    last=lastName.value;  
    userName.value=("@"+first+last).toLowerCase();  

});

submit.addEventListener("click", function(){
    
    if(pass.value.length >= 8){
        
        if(pass.value === conPass.value){
            messageDiv.textContent="Hoşgeldiniz... " + userName.value.toLowerCase();
            messageDiv.classList="kayıtol__welcome";
            alertMessage.appendChild(messageDiv);
        }
        else{
            messageDiv.textContent="Parolalar Eşleşmiyor.. Kontrol Ediniz !!";
            messageDiv.classList="kayıtol__error";
            alertMessage.appendChild(messageDiv);
        }
    }
    else{
        messageDiv.textContent="Şifre En Az 8 Karakterden Oluşmalıdır !!";
            messageDiv.classList="kayıtol__error";
            alertMessage.appendChild(messageDiv);
    }
});


