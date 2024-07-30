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

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    let slideIndex = 0;
    const slides = slider.querySelectorAll('.slide');
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');

    function showSlide(index) {
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

    prevButton.addEventListener('click', () => {
      slideIndex--;
      showSlide(slideIndex);
    });

    nextButton.addEventListener('click', () => {
      slideIndex++;
      showSlide(slideIndex);
    });

    // Initialize the slider with the first slide
    showSlide(slideIndex);
  });
});
