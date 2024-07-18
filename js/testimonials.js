const myPrevBtn = document.getElementById("myPrevBtn");
const myNextBtn = document.getElementById("myNextBtn");
const myCarouselWrapper = document.querySelector(".my-carousel-wrapper");

let mySlideIndex = 0;

myPrevBtn.addEventListener("click", () => {
  if (mySlideIndex > 0) {
    mySlideIndex--;
    console.log("Previous Clicked: ", mySlideIndex);
    updateMySlidePosition();
  }
});

myNextBtn.addEventListener("click", () => {
  if (mySlideIndex < myCarouselWrapper.children.length - 1) {
    mySlideIndex++;
    console.log("Next Clicked: ", mySlideIndex);
    updateMySlidePosition();
  }
});


function updateMySlidePosition() {
  const slideWidth = myCarouselWrapper.clientWidth;
  myCarouselWrapper.style.transform = `translateX(-${mySlideIndex * slideWidth}px)`;
}

// Update visibility of slides
function updateSlideVisibility() {
  const slides = Array.from(myCarouselWrapper.children);
  slides.forEach((slide, index) => {
    if (index === mySlideIndex) {
      slide.style.display = 'flex'; // Display current slide
    } else {
      slide.style.display = 'none'; // Hide other slides
    }
  });
}

myPrevBtn.addEventListener("click", () => {
  if (mySlideIndex > 0) {
    mySlideIndex--;
    updateMySlidePosition();
    updateSlideVisibility();
  }
});

myNextBtn.addEventListener("click", () => {
  if (mySlideIndex < myCarouselWrapper.children.length - 1) {
    mySlideIndex++;
    updateMySlidePosition();
    updateSlideVisibility();
  }
});


