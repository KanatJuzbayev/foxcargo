const links = document.querySelectorAll('.section__link');

function changeSection() {
  const active = document.querySelector('.section__link.active');
  active.classList.remove('active');
  this.classList.add('active');
}

links.forEach( link => link.addEventListener('click', changeSection));


//footer links to header styles
const footerLinks = document.querySelectorAll('.footer__link');

function changeHeaderLinkStyle() {
  const active = document.querySelector('.section__link.active');
  active.classList.remove('active');

  const newActive = document.querySelector(`a[data-key="${this.dataset.key}"]`);
  newActive.classList.add('active');
}

footerLinks.forEach( link => link.addEventListener('click', changeHeaderLinkStyle));


//Nav-link's to active as you scroll through sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.section__link');
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 120) {
      current = section.getAttribute("id"); }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
