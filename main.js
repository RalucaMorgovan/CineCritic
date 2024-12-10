let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let search = document.querySelector(".search")
let clear = document.querySelector("#clear");
let btnscroll = document.querySelector('#upButton');
let btnscroll2= document.querySelector('#downButton');
let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');
document.addEventListener('DOMContentLoaded', function() {
  var today = new Date().toISOString().split('T')[0];
  document.getElementsByName("start")[0].setAttribute('min', today);
});


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



const playButtons = document.querySelectorAll('.play-button'); 
const modal = document.getElementById('trailer-modal'); 
const closeButton = document.getElementById('close-button'); 
const trailerVideo = document.getElementById('trailer-video'); 


playButtons.forEach(button => {
    button.addEventListener('click', () => {

        const movieTrailer = button.closest('.box').getAttribute('trailer-url');


        trailerVideo.src = movieTrailer;


        modal.style.display = 'flex';

        document.body.classList.add('no-scroll');
    });
});


closeButton.addEventListener('click', () => {
    closeModal();
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


function closeModal() {
    modal.style.display = 'none';
    trailerVideo.src = ''; 


    document.body.classList.remove('no-scroll');
}


