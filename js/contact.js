const sendContact = document.getElementById('sendContact')
const cancelContact = document.getElementById('cancelContact')
const contactForm = document.getElementById('contactForm')
const messageSent = document.getElementById('messageSent')
let nameContact = document.getElementById('name-contact')
let surnameContact = document.getElementById('surname-contact')
let emailContact = document.getElementById('email-contact')
let messageContact = document.getElementById('message-contact')

contactForm.addEventListener('submit', (e) =>{
    if(!contactForm.checkValidity()) {
        e.preventDefault();
        swal({
                    title: "Error",
                    text: 'Verifique si el formulario se completo correctamente',
                    icon: 'error',
                    timer: 2000,
                })
                contactForm.reset()
                console.log('error')
    } else {
            e.preventDefault()
            params = {
                to_name: `${nameContact.value} ${surnameContact.value}`,
                from_name: `${emailContact.value}`,
                message: `${messageContact.value}`,
            }
            emailjs.send('service_8tx8en8', 'template_9orh3rc', params)
            swal({
                title: "Enviado",
                text: 'Su mensaje se envió correctamente',
                icon: 'success',
                timer: 2000,
            })
            contactForm.reset()
            console.log('enviado')
    }
})

cancelContact.addEventListener('click', (event) => {
    event.preventDefault()
    contactForm.reset()
})