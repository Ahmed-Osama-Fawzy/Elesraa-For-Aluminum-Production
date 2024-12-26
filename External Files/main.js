let currentIndex = 0;
const slides = document.querySelectorAll('.new-carousel-item');
const totalSlides = slides.length;

// Function to move to the next/previous slide
function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Update carousel display based on the current index
function updateCarousel() {
  const carousel = document.querySelector('.new-carousel');
  const offset = -currentIndex * 100; // Move by 100% of the screen width
  carousel.style.transform = `translateX(${offset}%)`;
}

// Automatically change the slide every 10 seconds
    setInterval(() => moveSlide(1), 10000);