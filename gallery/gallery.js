// Toggle Navbar for Mobile View
const menuToggle = document.querySelector('.toggle');
const navbar = document.querySelector('.header');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.querySelector('body').appendChild(starsContainer);

    // Генерация случайных звезд
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        starsContainer.appendChild(star);
    }
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

// Получаем элементы модального окна и изображение
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Обработчик клика на изображение в галерее
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex"; // Показываем модальное окно
        modalImg.src = img.src; // Устанавливаем источник увеличенного изображения
    });
});

// Обработчик клика на кнопку закрытия
closeBtn.addEventListener('click', () => {
    modal.style.display = "none"; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне изображения
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
});
