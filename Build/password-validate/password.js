const inputPassword = document.querySelector("#password-text")
const finalSubmitBtn = document.querySelector("#final-submit")

inputPassword.addEventListener("keyup", function passwordHandler() {
    console.log(inputPassword.value.length)
    if (inputPassword.value.length > 10){
        finalSubmitBtn.disabled = false;
        inputPassword.style.backgroundColor = "green"
    }else{
        inputPassword.style.backgroundColor = "red"
    }
})