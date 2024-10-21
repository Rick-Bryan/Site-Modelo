const btnMobile = document.getElementById('btn-mobile-test');

function toggleMenu(){
    const nav = document.getElementById('nav-test');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)