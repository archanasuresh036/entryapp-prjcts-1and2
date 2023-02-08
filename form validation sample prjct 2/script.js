


function validateName(){
    let nameError =document.getElementById('username-error')
    let name = document.getElementById('username')


    if(name.value.trim()== '') 
    {
        nameError.innerHTML='user name cannot be blank'
        return false
    }else if(name.value.lenght < 5)
    {
        nameError.innerHTML = 'username must not be less than 5 characters'
        return false
    }
    else{
        nameError.innerHTML = ''
        return true
    }


}
function validateEmail(){
    let email = document.getElementById('email')
    let emailError = document.getElementById('email-error')
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(email.value.trim()==''){
        emailError.innerHTML = 'Email cannot be blank!!'
        return false
    }else if( !email.value.match(regEx)){
        emailError.innerHTML = "Email not in global format"
        return false
    }else{
        emailError.innerHTML= ''
        return true
    }

}
function validatePassword(){
    let password = document.getElementById('password')
    let passwordError = document.getElementById('password-error')

    if(password.value.trim()==''){
        passwordError.innerHTML='password cannot be blank'
        return false
    }else if(password.value.length<6|| password.value.length>20){
        passwordError.innerHTML = ' password length cannot be less than 6 characters or more than 20 characters'
    return false    
    }else{
        passwordError.innerHTML = ''
        return true
    }
}

function validateRepeat(){
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')  

    if (password.value != repeatPassword.value){
        repeatError.innerHTML='password mismatch'
        return false
    }else{
        repeatError.innerHTML=''
        return true
    }
}
function validateForm(){
    let submitError = document.getElementById('submit-error')
    if(!validateEmail() || !validateName() || !validatePassword() || !validateRepeat){
        submitError.innerHTML='Please resolve the errors'
        return false
    }else{
        submitError.innerHTML = ''
        return true
    }
}