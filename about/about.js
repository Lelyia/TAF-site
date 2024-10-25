// Toggle Navbar for Mobile View
const menuToggle = document.querySelector('.toggle');
const navbar = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});