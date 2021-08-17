document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        console.log('your password is valid');
    }
    else{
        console.log('please type correct password');
    }
    location.href = 'banking.html'
})