
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Login button clicked');

    const mobileNumber= document.getElementById('mobile-number').value;


    const password = document.getElementById('pin-number').value;

    // console.log(mobileNumber, password); 


    if(mobileNumber === '018' && password === '1234') {
        console.log('Login successful');
        window.location.href ='home.html';
    } 
    else{
        alert('Invalid mobile number or password');
    }

});