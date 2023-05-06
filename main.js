const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

 if (navToggle) {
    navToggle.addEventListener('click', () => {
        console.log('hi')
        navToggle.classList.add('show-menu')
    })
 }