// Referencia formulario Login
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
    
    if(!user || user.password !== passwordLogin) {
        return showErrorMsgL('Datos incorrectos, por favor inténtelo de nuevo')
    }

    localStorage.setItem('currentUser', JSON.stringify(user))

});


function showErrorMsgL(message, time = 3000){
    loginError.textContent = message 
    setTimeout(()=>{
        loginError.textContent = null;
    }, time)
};