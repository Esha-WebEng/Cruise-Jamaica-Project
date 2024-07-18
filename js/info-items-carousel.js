var customSlideIndex = 1;
showCustomSlides(customSlideIndex);

function plusSlides(n) {
  showCustomSlides(customSlideIndex += n);
}

function currentSlide(n) {
  showCustomSlides(customSlideIndex = n);
}

function showCustomSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-carousel-slide");
  if (n > slides.length) {customSlideIndex = 1}
  if (n < 1) {customSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[customSlideIndex-1].style.display = "block";
}
