// Referencia formulario Login
const formLogin = document.querySelector('#formLogin');
const loginError = document.querySelector('#loginError');

//Referencia navbar
const adminMusic = document.querySelector('#adminMusic');
const adminUsers = document.querySelector('#adminUsers');

//Tomar elemento del formulario

const login = document.querySelector('#login');
const logout = document.querySelector('#logout');
const loginSection = document.querySelector('#loginSection');
const loginMSG = document.querySelector('#loginMSG');
const role = document.querySelector('#role');
let user;


//Referencia al mensaje Error
const LoginError = document.querySelector('#LoginError')

//tomar array del localstorage
let users = JSON.parse(localStorage.getItem('users')) || [];


checkIsAuth();
function checkIsAuth(){
    user = JSON.parse(localStorage.getItem('currentUser'));
    if(user){
        loginSection.classList.add('dnone')
        login.classList.add('dnone')
        logout.classList.remove('dnone')
        loginMSG.classList.remove('dnone')
        adminMusic.classList.add('dnone')
        adminUsers.classList.add('dnone')
    }else{
        loginSection.classList.remove('dnone')
        login.classList.remove('dnone')
        logout.classList.add('dnone')
        loginMSG.classList.add('dnone')
        adminMusic.classList.add('dnone')
        adminUsers.classList.add('dnone')
    } 
};
adminCheck();
function adminCheck(){
    admin = JSON.parse(localStorage.getItem('administrator'));
    if(admin){
        loginSection.classList.add('dnone')
        login.classList.add('dnone')
        logout.classList.remove('dnone')
        loginMSG.classList.remove('dnone')
        adminMusic.classList.remove('dnone')
        adminUsers.classList.remove('dnone')
    } 
};


logout.addEventListener('click', () => {
    localStorage.removeItem('currentUser') || localStorage.removeItem('administrator');
    checkIsAuth();
    adminCheck();
})



formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailLogin = formLogin.elements.emailLogin.value;
    const passwordLogin =  formLogin.elements.passwordLogin.value;
   
    const user = users.find(usr => {
        return usr.email === emailLogin
    })
    console.log('user', user)

    if(!user || user.password !== passwordLogin ) {
        return showErrorMsgL('Datos incorrectos, por favor inténtelo de nuevo')
    };
   
    
        if(user.role === 'CLIENT'){
            localStorage.setItem('currentUser', JSON.stringify(user))
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
            formLogin.reset();
            checkIsAuth();
            window.location.href = '/index.html'
        }else if(user.role === 'ADMIN'){
            localStorage.setItem('administrator', JSON.stringify(user))
            formLogin.reset();
            adminCheck();
            window.location.href = '/pages/adminMusic.html'
        }else{
            return showErrorMsgL('Datos incorrectos, por favor inténtelo de nuevo')
        }      
    
        
    
    
});


function showErrorMsgL(message, time = 3000){
    loginError.textContent = message 
    setTimeout(()=>{
        loginError.textContent = null;
    }, time)
};