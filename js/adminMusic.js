// adminCheck();
// function adminCheck(){
//     admin = JSON.parse(localStorage.getItem('administrator'));
//     if(admin){
//         login.classList.add('dnone')
//         logout.classList.remove('dnone')
//         adminMusic.classList.remove('dnone')
//         adminUsers.classList.remove('dnone')
//     } 
// };

// logout.addEventListener('click', () => {
//     localStorage.removeItem('administrator');
//     adminCheck();
//     window.location.href = '/pages/login.html'
// })

// const formSong = document.getElementById('formSong')
// const element = formSong.elements
// const code = document.getElementById('code')
// const nameSong = document.getElementById('nameSong')
// const artist = document.getElementById('artist')
// const album = document.getElementById('album')
// const gen = document.getElementById('gen')
// const year = document.getElementById('year')
// const modalIngresos = document.getElementById('modalIngresos')
// const imgSong = document.getElementById('img-song')
// const closeModal = document.getElementById('closeModal')
// const songsList = document.getElementById('songsList')

// modalIngresos.addEventListener('submit', (e) => {
//     e.preventDefault()    
//     song = {
//         nameSong: element.nameSong.value,
//         artist: element.artist.value,
//         album: element.album.value,
//         gen: element.gen.value,
//         year: element.year.value,
//         // imgSong: element.imgSong.value,
//         code: new Date()
//     }
//     console.log(song)
//     localStorage.setItem('song', JSON.stringify(song))
//     formSong.reset()
//     renderSong()

// })

// closeModal.addEventListener('click', (event) => {
//     event.preventDefault()
//     formSong.reset()
// })

// song = JSON.parse(song)
// console.log(song)

// function renderSong() {
//     const songs = JSON.parse(localStorage.getItem('songs')) || [];
//     songsList.innerHTML = ''
//     songs.forEach(song => {
//         songsList.innerHTML += `<li>
//                 // <img class="avatar" src=${user.avatar.includes('http') ? user.avatar : '/assets/image/users/default-avatar.png'}></div>
//                 <div class="data">
//                     <div  class="nameSong"> ${songs.nameSong}</div>
//                     <div  class="artist"> ${songs.artist}</div>   
//                 </div>
//                 <div class="data">
//                     <div  class="album"> ${songs.album}</div>  
//                     <div class="year">${songs.year}</div>
//                 </div>
//                 <div class="gen">${songs.gen}</div>
//                 <div class="code">${songs.code}</div>
//                 </li>`
//     })
// }

// ==================================

adminCheck();

function adminCheck() {
    admin = JSON.parse(localStorage.getItem('administrator'));
    if (admin) {
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
    formSong.reset()
    renderSong()
    Swal.fire(
        'Guardada!',
        'Se ha cargado la canción correctamente',
        'success'
    )
})
closeModal.addEventListener('click', (event) => {
    event.preventDefault()
    formSong.reset()
})

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
                <p>${song.nameSong}</p>
                <p>${song.artist}</p>
            </td>
            <td>${song.album}</td>
            <td>${song.gen}</td>
            <td>${song.year}</td>
        </tr>`
    })
}
renderSong();