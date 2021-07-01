const navDisplay = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.main-navigation');
  const main = document.querySelector('.main');

  function Display() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    main.classList.toggle('foreground');
  }

  burger.addEventListener('click', () => {
    Display();
  });
};

navDisplay();