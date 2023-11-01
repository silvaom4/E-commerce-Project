let form = document.getElementById('form');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let message = document.getElementById('message');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkInputs();
})


function checkInputs() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    

    if(firstNameValue === ''){
        console.log('error works')
        setErrorFor(firstName, 'Please enter your first name')
    } else {
        console.log('success works')
        setSuccessFor(firstName, 'Thank you for entering your first name ') 
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Please enter your last name')
    } else {
        setSuccessFor(lastName, 'Thank you for entering your last name ')
    }


    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email,'Thank you for entering your email')
    }

}

// start here and fix the icons 

function setErrorFor(input, message) {
    let formControl = input.parentElement
  
    let small = formControl.querySelector('small')
    small.innerHTML = message

    formControl.className = 'form-divs error'
} 

function setSuccessFor(input, message) {
    let formControl = input.parentElement
    
    let small = formControl.querySelector('small')
    small.innerHTML = message
    formControl.className = 'form-divs success'
}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 
















