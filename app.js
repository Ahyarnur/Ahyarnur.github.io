const mobil = document.querySelector('#mobil') 
const menu = document.querySelector('#menu') 
const moon = document.querySelector('#moon') 
const body = document.querySelector('body') 
const hLink = document.querySelectorAll('#hLink') 
mobil.addEventListener('click', ()=>{
menu.classList.toggle('hidden')
mobil.classList.toggle('bg-white')
})
hLink.forEach(link=>{
    link.addEventListener('click', ()=>{
        menu.classList.toggle('hidden')
        mobil.classList.toggle('bg-white')
    })
})
moon.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    })