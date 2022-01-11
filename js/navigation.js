// Scroll by click

function menuOnClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset
    - document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      // behavior: 'smooth'
    });
    e.preventDefault();
  }
}

const menuLinks = document.querySelectorAll('.section__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', menuOnClick);
  });
}

const footerLinks = document.querySelectorAll('.footer__link[data-goto]');
if (footerLinks.length > 0) {
  footerLinks.forEach(footerLink => {
    footerLink.addEventListener('click', menuOnClick);
  });
}


// Nav-link's to active as you scroll through sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.section__link');
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


// show hamburger nav
const hamburger = document.querySelectorAll('.hamburger');

function showHideHamburger() {
  document.body.classList.toggle('lock');
  const hamburgerIcon = document.querySelector('.hamburger');
  hamburgerIcon.classList.toggle('active');

  const hearderNavigation = document.querySelector('.hearder__navigation');
  hearderNavigation.classList.toggle('active');
}

hamburger.forEach(burger => burger.addEventListener('click', showHideHamburger));


// hide nav by click other aria
const body = document.querySelector('body');

body.addEventListener('click', function(e) {
  if (!e.target.closest('.hearder__navigation') && !e.target.closest('.hamburger') && document.querySelector('.hearder__navigation.active')) {
    showHideHamburger();
  }
});
