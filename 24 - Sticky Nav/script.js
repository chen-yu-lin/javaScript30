const nav = document.getElementById('main') 
const logo = document.querySelector('.logo')

let Y = nav.offsetTop
console.log(Y)

window.addEventListener('scroll',() => {
    if (window.scrollY >= Y) {
        nav.className = 'fixed-nav'
    } else {
        nav.className = ''
    }
})