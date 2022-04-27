// Referencia forulario Login
const formLogin = document.querySelector('#formLogin');
const loginError = document.querySelector('#loginError');


//Referencia al mensaje Error
const LoginError = document.querySelector('#LoginError')

//tomar array del localstorage
let users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailLogin = formLogin.elements.emailLogin.value;
    const passwordLogin =  formLogin.elements.passwordLogin.value;

    const user = users.find(usr => {
                return usr.email === emailLogin
            });
            console.log('user', user)
    if(!user) {
        return showErrorMsgL('No se ha encontrado una cuenta con el correo ingresado', 4000)
    }
    if(user.password !== passwordLogin) {
        return showErrorMsgL('Datos incorrectos, por favor intentelo de nuevo')
    }


});

// function userLogin(e){
//     e.preventDefault();
//     element = e.target.elements;
//     const emailLogin = element.emailLogin.value;

   
//     const emailExist = users.find(usr => {
//         if(emailLogin !== usr.email.value) {
//             return showErrorMsg('El correo no se encuntra registrado, si aún no tienes una cuenta, registrate.', 5000)
//         }else {
//             userExist = user
//         }

//         // if(userExist.passwordLogin !== usr.password.value){
//         //     return showErrorMsg('Contraseña incorrecta.', 5000)
//         // }
//         // localStorage.setItem('currentUser', JSON.stringify(user))
//     });
//     console.log(emailExist)

//     let user = {
//         email: element.emailLogin.value,
//         passwordLogin: element.passwordLogin.value
//     }

// }


function showErrorMsgL(message, time = 3000){
    loginError.textContent = message 
    setTimeout(()=>{
        loginError.textContent = null;
    }, time)
}