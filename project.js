// JavaScript for Carousel Functionality
const carousels = document.querySelectorAll('.carousel1',);

carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-images1 img');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');

    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    updateCarousel(); // Initialize the carousel
});
