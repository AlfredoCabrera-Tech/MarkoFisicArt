let modal = document.querySelector(".modal")
let modalClose = document.querySelector(".modal__close")
let modalImg = document.querySelector(".modal__img")

let images = document.querySelectorAll(".image > div")
let mary = document.querySelector(".mary")
let papaAngelo = document.querySelector(".papa-angelo")
let stefan = document.querySelector(".stefan")
let ligia = document.querySelector(".ligia")
let nGirasol = document.querySelector(".n-girasol")
let viejita = document.querySelector(".viejita")
let sra = document.querySelector(".sra")
let nFloresPelo = document.querySelector(".n-flores-pelo")
let saltoAngel = document.querySelector(".salto-angel")
let nTurbante = document.querySelector(".n-turbante")
let tigre = document.querySelector(".tigre")
let bebe = document.querySelector(".bebe")
let afgana = document.querySelector(".afgana")
let nAfro = document.querySelector(".n-afro")
let lobo = document.querySelector(".lobo")
let jirafasSolas = document.querySelector(".jirafas-solas")

/* MODAL FUNCTIONALITY */
modalClose.addEventListener('click', () => {
  modal.close()
})

/* mary.addEventListener('click', (e) => {
  modal.showModal()
}) */

let modalSrc = (imageId) => {
  modalImg.src = `https://drive.google.com/uc?id=${imageId}`
  modal.showModal()
}

mary.addEventListener('click', () => {
  modalSrc("1Enf55McxB8LnYrtmwHmISBI77I7gJkZG")
})
papaAngelo.addEventListener('click', () => {
  modalSrc("1BnSbn6ovylb1r6rzyHs8UzqBMt4PxNa6")
})
stefan.addEventListener('click', () => {
  modalSrc("1dQd2cTKph22pG3LAOy2KU11NyBdyuPEt")
})
ligia.addEventListener('click', () => {
  modalSrc("1zFbhGkY0_-qL3fjHYh8fHocKgWjyOVwG")
})
nGirasol.addEventListener('click', () => {
  modalSrc("1HNMf9SqoQIxqa7MUVZ7uphpNEWOFr_YS")
})
viejita.addEventListener('click', () => {
  modalSrc("1moYHPIhSIk7_OY3aBo2z-bp_DFavKZna")
})
sra.addEventListener('click', () => {
  modalSrc("1ra8-XbvhBptQWxRa8TZxoyntdtfWXTaC")
})
nFloresPelo.addEventListener('click', () => {
  modalSrc("1CvCyu73zbaxMGaSbmWiiWc79K9L-Op_x")
})
saltoAngel.addEventListener('click', () => {
  modalSrc("1ESEQFiDaNGfm_MjlssAu3GX-BvnYpwA-")
})
nTurbante.addEventListener('click', () => {
  modalSrc("1KQC9kwRbGfwHhKUlb9PU81sKq8X-Urex")
})
tigre.addEventListener('click', () => {
  modalSrc("1P8NbBHuH_HtKJLafYeUzjjsBC6bF3erc")
})
bebe.addEventListener('click', () => {
  modalSrc("1YX5Y1NohjiyfxUbwESLE0Hh1vnCwWQqq")
})
afgana.addEventListener('click', () => {
  modalSrc("1v7KXfeIzjE4z67TGGVnzL4AZOdYkfhPn")
})
nAfro.addEventListener('click', () => {
  modalSrc("1kKt-hsD5z30udmf1albbr3NoHqsugRHJ")
})
lobo.addEventListener('click', () => {
  modalSrc("1RFDAirFd0_9a0lcHzWbabdO7GGyAiYsi")
})
jirafasSolas.addEventListener('click', () => {
  modalSrc("1Za7a1BJeUo6_q3cVWF_hmX1JU406tzOt")
})


/* images.forEach(image => {
  image.addEventListener('click', () => {
    modalImg.src = `https://drive.google.com/uc?id=${image}`
    modal.showModal()
  })
})
 */



