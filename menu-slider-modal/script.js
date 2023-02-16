const toggle = document.querySelector('.toggle')
const nav = document.querySelector('nav')
const signup = document.querySelector('#sign-up')
const modalContainer = document.querySelector('.modal-container')
const closebtn = document.querySelector('.close-btn')
toggle.addEventListener('click',()=>{document.body.classList.toggle('showNav');})

signup.addEventListener('click',()=>modalContainer.classList.toggle('showModal'))

closebtn.addEventListener('click',()=>modalContainer.classList.remove('showModal'))

window.addEventListener("click",e=>e.target == modalContainer?modalContainer.classList.remove('showModal'):false)