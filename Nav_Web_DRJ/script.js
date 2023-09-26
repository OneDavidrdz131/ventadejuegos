// script.js
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let index = 0;

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -index * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Cambia de diapositiva cada 3 segundos (3000 milisegundos)
setInterval(nextSlide, 3000);