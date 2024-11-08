// Toggle Menu for Mobile
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar ul');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
