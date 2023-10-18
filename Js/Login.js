document.getElementById('submit-button').addEventListener('click', function () {
    const email = document.getElementById('user-email').value ;
    const password = document.getElementById('user-password').value ;
    if(email == 'admin@gmail.com' && password == 123456){
        window.location.href = 'Home.html'
    } 
})
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
