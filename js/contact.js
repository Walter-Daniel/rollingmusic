const sendContact = document.getElementById('sendContact')
const cancelContact = document.getElementById('cancelContact')
const contactForm = document.getElementById('contactForm')
const messageSent = document.getElementById('messageSent')
let nameContact = document.getElementById('name-contact')
let surnameContact = document.getElementById('surname-contact')


sendContact.addEventListener('click', (event) => {
    event.preventDefault()
    const contactUser = {
        nameContact: contactForm.elements.name.value,
        surnameContact: contactForm.elements.surname.value,
        emailContact: contactForm.elements.email.value,
        messageContact: contactForm.elements.message.value,
        
    }
    localStorage.setItem('currentContactUser', JSON.stringify(contactUser))  
    showMessageSent()
    contactForm.reset()
})



function showMessageSent(message, element, time) {
    messageSent.innerText = 'Su mensaje se envio correctamente';
    setTimeout(() => {
        messageSent.innerText = null
    }, 2000)   
}


cancelContact.addEventListener('click',(event) => {
    event.preventDefault()
    contactForm.reset()
})