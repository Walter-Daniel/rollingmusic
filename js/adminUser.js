//referencia de la tabla
const userTable = document.querySelector('#user-table');




function renderUser() {
    const users = JSON.parse(localStorage.getItem('users'));
    userTable.innerHTML  = '';
    users.forEach(user => {
        userTable.innerHTML += ` <tr>
        <td>
            <div class="user-validation d-flex justify-content-around">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Validado</label>
                </div>
            </div>
        </td>
        <td>${user.firstName}</td>
        <td>${user.surname}</td>
        <td>${user.email}</td>
      </tr>`
    });
}
renderUser()