let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let search = document.querySelector(".search")
let clear = document.querySelector("#clear");
let btnscroll = document.querySelector('#upButton');
let btnscroll2= document.querySelector('#downButton');
let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');
// document.addEventListener('DOMContentLoaded', function() {
//   var today = new Date().toISOString().split('T')[0];
//   document.getElementsByName("start")[0].setAttribute('min', today);
// });


const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode','active')
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode',null)


}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) { 
      header.classList.add("shadow");
  } else {
      header.classList.remove("shadow");
  }
}); 

var swiper = new Swiper(".home", {
    spaceBetween: 30, 
    centeredSlides: true,
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

    var swiper = new Swiper(".coming-container", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        568: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
      },
    });

     menu.onclick = () => {
      navbar.classList.toggle('active');
     }

     window.onscroll = () => {
      navbar.classList.remove('active');
     }

     search.onclick=function(){
        document.querySelector(".container-search").classList.toggle('active');
     }

     clear.onclick=function(){
      document.getElementById("search").value="";
   }


upButton.addEventListener("click", function() {
     window.scroll(0,0);
});

downButton.addEventListener("click", function() {
  window.scroll(0, document.body.scrollHeight - window.innerHeight);
});

themeSwitch.addEventListener("click", ()=> {
  lightmode=localStorage.getItem('lightmode')
  if(lightmode !=="active"){
    enableLightmode();
  }
  else{
    disableLightmode();
  }
})

document.addEventListener("DOMContentLoaded", () => {
  let lightmode = localStorage.getItem('lightmode');
  if (lightmode === "active") {
      enableLightmode(); 
  } else {
      disableLightmode(); 
  }
});



// const playButtons = document.querySelectorAll('.play-button'); 
// const modal = document.getElementById('trailer-modal'); 
// const closeButton = document.getElementById('close-button'); 
// const trailerVideo = document.getElementById('trailer-video'); 


// playButtons.forEach(button => {
//     button.addEventListener('click', () => {

//         const movieTrailer = button.closest('.box').getAttribute('trailer-url');


//         trailerVideo.src = movieTrailer;


//         modal.style.display = 'flex';

//         document.body.classList.add('no-scroll');
//     });
// });


// closeButton.addEventListener('click', () => {
//     closeModal();
// });


// window.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         closeModal();
//     }
// });


// function closeModal() {
//     modal.style.display = 'none';
//     trailerVideo.src = ''; 


//     document.body.classList.remove('no-scroll');
// }


// SEARCH
const categories = [
  { id: 0, image: 'img/m1.jpg', title: 'Venom', genre: 'Actiune' },
  { id: 1, image: 'img/Film2.jpg', title: 'Joker', genre: 'Psihologic, Thriller' },
  { id: 2, image: 'img/Film3.jpg', title: 'Smile 2', genre: 'Psihologic, Thriller, Tragedie' },
  { id: 3, image: 'img/Film4.png', title: 'The Grinch', genre: 'Animatie, Comedie' },
  { id: 4, image: 'img/Film5.jpg', title: 'Moartea in vacanta', genre: 'Comedie' },
  { id: 5, image: 'img/Film6.png', title: 'Despicable Me 4', genre: 'Animatie, Comedie' },
  { id: 6, image: 'img/Film7.png', title: 'Deadpool & Wolverine', genre: 'Actiune, Comedie' },
  { id: 7, image: 'img/Film8.png', title: 'IT', genre: 'Supernatural, Horror' },
  { id: 8, image: 'img/Film9.png', title: 'Spider-Man: No way Home', genre: 'Actiune, Sci-fi' },
  { id: 9, image: 'img/Film10.png', title: 'A Sudden Case of Christmas', genre: 'Comedie, Familie' },
  { id: 10, image: 'img/Film11.png', title: 'Home Alone', genre: 'Comedie, Familie' },
  { id: 11, image: 'img/Film12.png', title: 'Family Pack', genre: 'Comedie, Aventura' },
  { id: 12, image: 'img/Film13.png', title: 'Sonic the hedfehog', genre: 'Aventura, Comedie' },
  { id: 13, image: 'img/Film14.png', title: 'Upgraded', genre: 'Comedie, Romantic' },
  { id: 14, image: 'img/Film15.png', title: 'Dont Move', genre: 'Horror, Thriller' },
  { id: 15, image: 'img/Serial1.jpg', title: 'When calls the heart', genre: 'Drama, Romantic' },
  { id: 16, image: 'img/Serial2.png', title: 'La casa de papel', genre: 'Actiune, Furt' },
  { id: 17, image: 'img/Serial3.png', title: 'Friends', genre: 'Comedie' },
  { id: 18, image: 'img/Serial4.png', title: 'Prison Break', genre: 'Actiune, Drama' },
  { id: 19, image: 'img/Serial5.png', title: 'Supergirl', genre: 'Actiune, Sci-Fi' },
  { id: 20, image: 'img/Serial6.png', title: 'Arrow', genre: 'Actiune, Sci-Fi' },
  { id: 21, image: 'img/Serial7.jpg', title: 'Lucifer', genre: 'Supernatural, Drama' },
  { id: 22, image: 'img/Serial8.png', title: 'From', genre: 'Supernatural, Horror' },
  { id: 23, image: 'img/Serial9.png', title: 'Superman & Lois', genre: 'Actiune, Sci-Fi' },
  { id: 24, image: 'img/Serial10.png', title: 'Intimacy', genre: 'Politica, Drama' },
  { id: 25, image: 'img/Serial11.png', title: 'Orphan Black', genre: 'Drama, Thriller' },
  { id: 26, image: 'img/Serial12.png', title: 'The Originals', genre: 'Supernatural, Drama' },
  { id: 27, image: 'img/Serial13.png', title: 'Merlin', genre: 'Supernatural, Fantezie' },
  { id: 28, image: 'img/Serial14.png', title: 'Teen Wolf', genre: 'Actiune, Adolescentin' },
  { id: 29, image: 'img/Serial5.png', title: 'Chilling Adventures of Sabrina', genre: 'Fantezie, Adolescentin'} 
];

// Adăugăm event listener pentru apăsarea tastelor în câmpul de căutare
document.getElementById('searchBar').addEventListener('keyup', (e) => {
  console.log("Căutarea a început: ", e.target.value);  // Verificăm ce se scrie în câmpul de căutare
  if (e.key === 'Enter') {  // Verificăm dacă tasta apăsată este Enter
      const searchData = e.target.value.toLowerCase();
      const filterData = categories.filter((item) => {
          return item.title.toLowerCase().includes(searchData) || item.genre.toLowerCase().includes(searchData);
      });

      if (filterData.length > 0) {
          // Redirecționăm către o altă pagină cu parametrii căutării
          const query = encodeURIComponent(searchData); // Codificăm termenii căutării pentru a fi siguri că sunt validați pentru URL
          window.location.href = `search-results.html?query=${query}`;
      } else {
          alert("Nu exista acest item."); // Afișăm un mesaj dacă nu sunt rezultate
      }
  }
});

// Selectăm elementele relevante
const playButtons = document.querySelectorAll('.play-button'); // Butoanele pentru play
const modal = document.getElementById('trailer-modal');        // Modalul
const closeButton = document.getElementById('close-button');  // Butonul de închidere
const trailerVideo = document.getElementById('trailer-video'); // Iframe-ul video

// Funcție pentru deschiderea modalului
playButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('buton');
        const box = button.closest('.box'); // Găsim containerul părinte
        if (!box) return console.error("Elementul '.box' nu a fost găsit.");

        const movieTrailer = box.getAttribute('trailer-url'); // Obținem URL-ul trailerului
        if (!movieTrailer) return console.error("Atributul 'trailer-url' nu este definit.");

        trailerVideo.src = movieTrailer; // Setăm sursa video
        modal.style.display = 'flex';   // Afișăm modalul
        document.body.classList.add('no-scroll'); // Dezactivăm scroll-ul paginii
    });
});

// Funcție pentru închiderea modalului
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Funcția care închide modalul și resetează sursa video
function closeModal() {
    modal.style.display = 'none'; // Ascundem modalul
    trailerVideo.src = '';       // Resetăm sursa video
    document.body.classList.remove('no-scroll'); // Permitem din nou scroll-ul paginii
}
