document.getElementById('login-submit').addEventListener('click', function() {
    const emailField= document.getElementById('email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('password').value;
    if(userEmail=='admin@admin.com' && passwordField == 'admin'){
        window.location.href ='banking.html'
    }
});
