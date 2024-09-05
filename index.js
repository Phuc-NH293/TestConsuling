document.addEventListener('DOMContentLoaded', () => {
  const navToggleButton = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');
  navToggleButton.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
    });
  });
});
