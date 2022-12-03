let sacar = document.querySelector('.header__login')
let sacar2 = document.querySelector('.header__superior')

let navbar = document.querySelector('.container__menu');
let sticky = navbar.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('menu_fixed');
        sacar.style.display = 'none'
        sacar2.style.display = 'none'
    } else {
        navbar.classList.remove('menu_fixed');
        sacar.style.display = 'flex'
        sacar2.style.display = ''
    }
} 

