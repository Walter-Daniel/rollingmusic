//tomar elemento formulario
const userRegisterForm = document.querySelector('#formRegister')
const errorMSG = document.querySelector('#form-error')
const cancelRegister = document.querySelector('#cancelRegister')
//tomar elemento input
const firstName = document.querySelector('#firstName');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

let users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

function userRegister(e) {
    e.preventDefault();
    if(!userRegisterForm.checkValidity() ) {
        e.preventDefault();
        e.stopPropagation();
    }
    const element = e.target.elements;
    const email = element.email.value;

    const emailExist = users.some(usr => {
        return email === usr.email
    })

    if(emailExist){
        return showErrorMsg('El email ya se encuentra registrado, por favor ingrese otro', 5000);
    }
    
    if(element.password.value !== element.passwordConfirm.value) {
        return showErrorMsg('Las contraseñas no coinciden');
    }
    const user = {
        firstName: element.firstName.value,
        surname: element.surname.value,
        nickname: element.nickname.value,
        email: element.email.value,
        password: element.password.value,
        gender: element.gender,
        id: Date.now(),
        createdAt: new Date(),
        role: 'CLIENT'
    }

    users.push(user)
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users))
    users = JSON.parse(localStorage.getItem('users'))
    console.dir(users)
   
};



function showErrorMsg(message, time = 3000){
    errorMSG.textContent = message 
    setTimeout(()=>{
        errorMSG.textContent = null;
    }, time)
}
