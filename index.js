document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');

  toggleButton.addEventListener('click', function () {
    navList.classList.toggle('open');
  });
});
