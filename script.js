// toggle class active
const navbarNav = document.querySelector('.header-navbar');
// ketika menu active
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// menghilangkan nav
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
} )