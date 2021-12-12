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

console.log(footerLinks);
