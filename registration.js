function clearErrorMessages() {
    genderErrorMessage.innerHTML = '';
    firstnameErrorMessage.innerHTML = '';
    surnameErrorMessage.innerHTML = '';
    emailErrorMessage.innerHTML = '';
    passwordErrorMessage.innerHTML = '';
}


function checkGender() {
    let gender = document.getElementsByName("gender");
    for (let i = 0; i < gender.length; i++) {
        if(gender[i].type == "radio" && gender[i].checked) {
            return true;
        }
    } 
    genderErrorMessage.innerHTML = 'Please choose your gender.';
    return false;
}

function checkFirstname() {
    let firstname = document.getElementById("firstname").value;
    if(firstname =='') {
        firstnameErrorMessage.innerHTML = 'This field must not be left empty.';
        return false;
    } 
    return true;
}

function checkSurname() {
    let surname = document.getElementById("surname").value;
    if(surname =='') {
        surnameErrorMessage.innerHTML = 'This field must not be left empty.';
        return false;
    } 
    return true;
}

function checkEmail() {
    let email = document.getElementById("email").value;
    let check = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = check.test(email);
    if(email =='') {
        emailErrorMessage.innerHTML = 'This field must not be left empty.';
        return false;
    } else if (valid == false) {
        emailErrorMessage.innerHTML = 'This field is not correct.';
        return false;
    }
    return true;
}

function checkPassword() {
    let password = document.getElementById("password").value;
    if(password =='') {
        passwordErrorMessage.innerHTML = 'This field must not be left empty.';
        return false;
    } else if (password.length < 8) {
        passwordErrorMessage.innerHTML = 'Your password is too short.';
        return false;
    }
    return true;
}


function checkRegistrationForm() {
    clearErrorMessages();
    
    let validGender = checkGender();
    let validFirstname = checkFirstname();
    let validSurname = checkSurname();
    let validEmail = checkEmail();
    let validPassword = checkPassword();

    if(validGender && validFirstname && validSurname && validEmail && validPassword) {
        success.innerHTML = `Hello, ${firstname.value} ${surname.value}! Your registration is successful!`;
    }
}