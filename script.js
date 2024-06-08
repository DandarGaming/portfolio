const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const imageWidth = document.querySelector('.carousel-images img').clientWidth;

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  carouselImages.style.transform = `translateX(${-imageWidth * counter}px)`;
});

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.children.length - 1) return;
  counter++;
  carouselImages.style.transform = `translateX(${-imageWidth * counter}px)`;
});
// JavaScript code to handle navigation and highlighting

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            smoothScroll(targetSection);
            highlightContainer(targetSection);
        });
    });

    function smoothScroll(target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }

    function highlightContainer(section) {
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.classList.remove('highlight');
        });
        section.closest('.container').classList.add('highlight');
    }
});

