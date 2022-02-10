// get the submit button
document.getElementById('login-submit').addEventListener('click', function() {
    // get email
    const emailField= document.getElementById('email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get password
    const passwordField = document.getElementById('password').value;
    // check email & password
    if(userEmail=='admin@admin.com' && passwordField == 'admin'){
        window.location.href ='banking.html'
    }
});
