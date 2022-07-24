let vid = document.querySelector("video")
let vidSrc = document.querySelector("video > source")
let vidBtn1 = document.querySelector(".video-1")
let vidBtn2 = document.querySelector(".video-2")
let vidBtn3 = document.querySelector(".video-3")
let vidBtn4 = document.querySelector(".video-4")
let vidBtn5 = document.querySelector(".video-5")
let vidBtn6 = document.querySelector(".video-6")

/* VIDEO SELECTOR FUNCTIONALITY */

vidBtn1.addEventListener("click", () => {
  vidSrc.setAttribute('src', "https://drive.google.com/uc?id=1s3Iuix1bBUFO2l4ul3GggIcx4Yego_NC")
  vid.load()
})
vidBtn2.addEventListener("click", () => {
  vidSrc.setAttribute('src', "https://drive.google.com/uc?id=1szzYAT089NPYHGU0yv9bYNivGhOjK-yL")
  vid.load()
})
vidBtn3.addEventListener("click", () => {
  vidSrc.setAttribute('src', "https://drive.google.com/uc?id=1ncokJyTdXVM_Bt2-X6zGc8gaPPvnwSks")
  vid.load()
})
vidBtn4.addEventListener("click", () => {
  vidSrc.setAttribute('src', "https://drive.google.com/uc?id=1pUQFJuumy4AD4hmywqTlDE8ieD-GGqgW")
  vid.load()
})
vidBtn5.addEventListener("click", () => {
  vidSrc.setAttribute('src', "https://drive.google.com/uc?id=1imwlrDPhFQAkSZmFSSZxXJZCVw8XN20c")
  vid.load()
})