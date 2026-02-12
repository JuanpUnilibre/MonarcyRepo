// ===== ANIMACION SCROLL =====
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ===== MENU MOVIL =====
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

if (mobileMenu && nav) {
    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        const isOpen = nav.classList.contains('active');
        mobileMenu.setAttribute('aria-expanded', isOpen);
    });
}
