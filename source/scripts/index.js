/* в этот файл добавляет скрипты*/
// main menu
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__menu-button');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});
