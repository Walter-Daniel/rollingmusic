//referencia de la tabla
const userTable = document.querySelector('#user-table');
const userValidation = document.querySelector('#user-validation');
const emailValidation = document.querySelector('#email-validation')

//referencia a los botones
const validationBtn = document.querySelectorAll('#validationBtn');
const cancelBtn = document.querySelectorAll('#cancelBtn');

//traer usuarios del localstorage
let users = JSON.parse(localStorage.getItem('users'));

function renderUser() {
    
    userTable.innerHTML  = '';
    users.forEach(user => {
        userTable.innerHTML += ` <tr>
        <td data-title="Nombre(s)">${user.firstName}</td>
        <td data-title="Apellido(s)">${user.surname}</td>
        <td data-title="Email">${user.email}</td>
        <td data-title="Rol">${user.role}</td>
        <td data-title="Validación">
        <div class="user-validation ">
            <div class="form-check form-switch">
            <button type="submit" class="btn btn-principal"><a href="/pages/error.html">Alta</a></button>
            <button  class="btn btn-secondary ms-2"><a href="/pages/error.html">Baja</a></button>
            </div>
        </div>
    </td>
        <td data-title="Estado">
        <div  class="icon-check">
        <i class="fa-regular fa-circle-check"></i>
        </div>
      </td>
      </tr>`
    });
};

renderUser();

