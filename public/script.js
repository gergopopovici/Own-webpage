document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-undef
  new Typed('.auto-type', {
    strings: ['My name is Gergő-Benone Popovici'],
    typeSpeed: 150,
    loop: false,
  });
  // eslint-disable-next-line no-undef
  new Typed('.auto-type2', {
    strings: ['I am a third year computer science student at UBB Cluj-Napoca'],
    typeSpeed: 90,
    loop: false,
    onComplete: function () {
      const imgElement = document.querySelector('.first_part_about img');
      imgElement.classList.add('show');
    },
  });
});

let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  slides.forEach((slide) => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

showSlide(slideIndex);
