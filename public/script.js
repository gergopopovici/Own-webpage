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
