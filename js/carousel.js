document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.transform = `translateX(0)`;
          slide.style.transition = 'transform 0.5s ease';
        } else if (i < index) {
          slide.style.transform = `translateX(-100%)`;
        } else {
          slide.style.transform = `translateX(100%)`;
        }
      });
    }
  
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    showSlide(currentIndex); // Show initial slide
  });
  