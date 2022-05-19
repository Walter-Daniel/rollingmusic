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

const formSong = document.getElementById('formSong')
const element = formSong.elements
const code = document.getElementById('code')
const nameSong = document.getElementById('nameSong')
const artist = document.getElementById('artist')
const album = document.getElementById('album')
const gen = document.getElementById('gen')
const year = document.getElementById('year')
const modalIngresos = document.getElementById('modalIngresos')
const imgSong = document.getElementById('img-song')
const closeModal = document.getElementById('closeModal')
const songsList = document.getElementById('songsList')
let songs = JSON.parse(localStorage.getItem('songs')) || [];
modalIngresos.addEventListener('submit', (e) => {
    e.preventDefault()
    const song = {
        nameSong: element.nameSong.value,
        artist: element.artist.value,
        album: element.album.value,
        gen: element.gen.value,
        year: element.year.value,
        // imgSong: element.imgSong.value,
        code: new Date()
    }
    songs.push(song)
    localStorage.setItem('songs', JSON.stringify(songs))
    formSong.reset();
    renderSong();
    Swal.fire(
        'Guardada!',
        'Se ha cargado la canción correctamente',
        'success'
    );
});
closeModal.addEventListener('click', (event) => {
    event.preventDefault()
    formSong.reset()
});

function renderSong() {
    const songs = JSON.parse(localStorage.getItem('songs')) || [];
    songsList.innerHTML = ''
    songs.forEach(song => {
        songsList.innerHTML += `
        <tr>
            <td>
            <img class="img-song" src=${song.imgSong}></img>
            </td>

            <td>${song.code}</td>
            <td>
                ${song.nameSong}
            </td>
            <td>
                ${song.artist}
            </td>
            <td>${song.album}</td>
            <td>${song.gen}</td>
            <td>${song.year}</td>
            <td>
            <button type="button" class="btn btn-ingresos">
            <i class="fa-solid fa-star"></i>
            </button>
            <button type="button" class="btn btn-ingresos">
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn btn-ingresos">
            <i class="fa-solid fa-trash-can"></i>
            </button>
            </td>

        </tr>`
    })
}
renderSong();
