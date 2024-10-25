let inputEmail = document.getElementById('email');
let button = document.getElementById('button');
// let error = document.getElementById('error');

// console.log(inputEmail.value);

console.log(button)

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail (email){

    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(expReg.test(email) == true){
        inputEmail.style.border = '2px solid gray';
        error.style.visibility = 'hidden';
        inputEmail.value = '';
        error.style.margin = '0';
    }
    else {
       inputEmail.style.border = '2px solid red';
       
       error.style.visibility = 'visible';
       error.style.margin = '0 0 20px 0';
    }
    console.log(expReg.test(email));
}