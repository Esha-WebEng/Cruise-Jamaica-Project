document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});


document.querySelectorAll('.question').forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.nav-item a');
    const currentLocation = window.location.pathname.split('/').pop().split('.')[0];

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.remove('active');
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item li');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

function toggleAnswer(question) {
    // Toggle the 'active' class on the clicked question
    question.classList.toggle('active');

    // Toggle the display of the answer associated with the clicked question
    var answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById('dropdown-content');
    dropdown.classList.toggle('show');
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


let currentIndex = 0; // Initialize currentIndex outside the function

function moveThingSlider(direction) {
    const thingStacks = document.querySelectorAll('.stack');
    const numThingStacks = thingStacks.length;

    currentIndex += direction;

    if (currentIndex >= numThingStacks) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = numThingStacks - 1;
    }

    thingStacks.forEach((stack, index) => {
        let offset = index - currentIndex;
        if (offset === 0) {
            stack.style.transform = 'translateX(0)';
        } else {
            stack.style.transform = `translateX(${offset * 100}%)`;
        }
    });
}


// schedule slider
let scheduleIndex = 0;
const scheduleSlider = document.getElementById('scheduleSlider');

function moveScheduleSlider(direction) {
    const width = scheduleSlider.offsetWidth;
    if (direction === -1 && scheduleIndex > 0) {
        scheduleIndex--;
    } else if (direction === 1 && scheduleIndex < scheduleSlider.children.length - 1) {
        scheduleIndex++;
    }
    scheduleSlider.style.transform = `translateX(-${width * scheduleIndex}rem)`;
    scheduleSlider.forEach((rectangle, index) => {
        if (index === currentIndex || index === currentIndex + 1 || index === currentIndex + 2) {
            activity.style.display = 'flex';
        } else {
            activity.style.display = 'none';
        }
    });
}


function moveActivitySlider(direction, container) {
    const rows = container.querySelector('.rows');
    const activities = rows.querySelectorAll('.activity');
    let currentIndex = parseInt(rows.dataset.currentIndex) || 0;
    const numActivities = activities.length;

    currentIndex += direction;

    if (currentIndex >= numActivities) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = numActivities - 1;
    }

    activities.forEach((activity, index) => {
        if (index === currentIndex || index === currentIndex + 1 || index === currentIndex + 2) {
            activity.style.display = 'flex';
        } else {
            activity.style.display = 'none';
        }
    });

    rows.dataset.currentIndex = currentIndex;
}

// Attach event listeners to previous and next buttons for each .popular section
document.querySelectorAll('.popular').forEach(popular => {
    const previousBtn = popular.querySelector('.previous');
    const nextBtn = popular.querySelector('.next');

    previousBtn.addEventListener('click', () => moveActivitySlider(-1, popular));
    nextBtn.addEventListener('click', () => moveActivitySlider(1, popular));
});





$(document).ready(function () {
  let currentIndex = 0;

  function showSlide(index) {
    let slides = $(".rectangle");
    slides.hide();
    slides.eq(index).show();
  }

  showSlide(currentIndex);

  $(".prev").click(function () {
    currentIndex =
      currentIndex === 0 ? $(".rectangle").length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  $(".next").click(function () {
    currentIndex =
      currentIndex === $(".rectangle").length - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });
});
