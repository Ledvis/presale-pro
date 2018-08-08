const menuToggler = document.querySelector('.navigation__toggler');
const mainNav = document.querySelector('.navigation');

let isMenuActive = false;

function toggleMenu() {
  if (!isMenuActive) {
    menuToggler.classList.add('navigation__toggler--active');
    mainNav.classList.add('navigation--active');
    isMenuActive = true;
  } else {
    menuToggler.classList.remove('navigation__toggler--active');
    mainNav.classList.remove('navigation--active');
    isMenuActive = false;
  }
}

export default function init() {
  menuToggler.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });
}
