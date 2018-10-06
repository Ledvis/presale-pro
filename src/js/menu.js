import SmoothScroll from 'smooth-scroll';

require('waypoints/lib/noframework.waypoints.min.js');

const menuToggler = document.querySelector('.navigation__toggler');
const mainNav = document.querySelector('.navigation');
const langList = document.querySelector('.lang__list');
const langValue = document.querySelector('.lang__value');
const navLinks = document.querySelectorAll('.navigation__item a');
const scroll = new SmoothScroll();

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

function showInView() {
  if (window.scrollY >= 5) {
    mainNav.classList.add('navigation--in-view');
  } else {
    mainNav.classList.remove('navigation--in-view');
  }
}

function addScroll(content, toggler, options = {
  speed: 1000,
  easing: 'easeOutCubic',
}) {
  scroll.animateScroll(
    content,
    toggler,
    options,
  );
}

function onLinkClick(link) {
  const selector = link.getAttribute('href');
  const content = document.querySelector(selector);
  addScroll(content, link);
}

export default function init() {
  menuToggler.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });

  window.addEventListener('scroll', showInView);

  langValue.addEventListener('click', () => {
    langValue.classList.toggle('lang__value--active');
    langList.classList.toggle('lang__list--active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.matches('.lang__value')) {
      langValue.classList.remove('lang__value--active');
      langList.classList.remove('lang__list--active');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      onLinkClick(link);
    });
  });
}
