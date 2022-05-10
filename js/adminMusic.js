adminCheck();
function adminCheck(){
    admin = JSON.parse(localStorage.getItem('administrator'));
    if(admin){
        login.classList.add('dnone')
        logout.classList.remove('dnone')
        adminMusic.classList.remove('dnone')
        adminUsers.classList.remove('dnone')
    } 
};

logout.addEventListener('click', () => {
    localStorage.removeItem('administrator');
    adminCheck();
    window.location.href = '/pages/login.html'
})