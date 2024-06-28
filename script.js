const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }
});

nextButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }
});

// Initialize the first slide as the current slide
slides[0].classList.add('current-slide');
document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('tagline-text').innerText;
    const words = text.split(' ');
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Adjust typing speed here
    const pauseBetweenWords = 300; // Pause between words

    function type() {
        if (charIndex < words[wordIndex].length) {
            document.getElementById('tagline-text').innerHTML += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            document.getElementById('tagline-text').innerHTML += ' ';
            wordIndex++;
            charIndex = 0;
            if (wordIndex < words.length) {
                setTimeout(type, pauseBetweenWords);
            }
        }
    }

    document.getElementById('tagline-text').innerHTML = ''; // Clear the text content
    type();
});
