let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.testimony-item');
    const totalSlides = items.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * (items[0].offsetWidth + 20); // Adjust for margin
    slider.style.transform = `translateX(${offset}px)`;
}

function openFullScreen(element) {
    const overlay = document.getElementById('fullScreenOverlay');
    const fullScreenImage = document.getElementById('fullScreenImage');
    const fullScreenText = document.getElementById('fullScreenText');

    const imgSrc = element.querySelector('img').src;
    const textContent = element.querySelector('p').textContent;

    fullScreenImage.src = imgSrc;
    fullScreenText.textContent = textContent;

    overlay.style.display = 'flex';
    document.body.classList.add('disable-scroll');
}

function closeFullScreen() {
    const overlay = document.getElementById('fullScreenOverlay');
    overlay.style.display = 'none';
    document.body.classList.remove('disable-scroll');
}
