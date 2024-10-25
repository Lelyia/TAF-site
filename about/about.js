// Toggle Navbar for Mobile View
const menuToggle = document.querySelector('.toggle');
const navbar = document.querySelector('.header');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Функция изменения фона при скролле
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#001d3d'; // Тёмный фон
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'; // Прозрачный фон
    }
  });
});