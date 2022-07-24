let menuBtn = document.querySelector("#btn")
let closeBtn = document.querySelector(".close-btn")
let sidebar = document.querySelector(".sidebar")
let topBtn = document.querySelector(".top-btn");

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



