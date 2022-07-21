let menuBtn = document.querySelector("#btn")
let closeBtn = document.querySelector(".close-btn")
let sidebar = document.querySelector(".sidebar")
let topBtn = document.querySelector(".top-btn");

let modal = document.querySelector(".modal")
let modalClose = document.querySelector(".modal__close")
let modalImg = document.querySelector(".modal__img")

let vid = document.querySelector("video")
let vidSrc = document.querySelector("video > source")
let vidBtn1 = document.querySelector(".video-1")
let vidBtn2 = document.querySelector(".video-2")
let vidBtn3 = document.querySelector(".video-3")
let vidBtn4 = document.querySelector(".video-4")
let vidBtn5 = document.querySelector(".video-5")
let vidBtn6 = document.querySelector(".video-6")

let mary = document.querySelector("#mary")
let images = document.querySelectorAll(".image")

/* SIDEBAR FUNCTIONALITY */

menuBtn.addEventListener('click',() =>{
  sidebar.classList.add("active")
})

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active")
})

/* BACK-TO-TOP BUTTON FUNCTIONALITY */

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

/* MODAL FUNCTIONALITY */
modalClose.addEventListener('click', () => {
  modal.close()
})

/* mary.addEventListener('click', (e) => {
  modal.showModal()
}) */

images.forEach(image => {
  image.addEventListener('click', () => {
    console.log(image.id)
    modalImg.src = `./assets/${image.id}.jpg`
    modal.showModal()
  })
})

