const links = document.querySelectorAll('.section__link');

function changeSection() {
  const active = document.querySelector('.section__link.active');
  active.classList.remove('active');
  this.classList.add('active');
}

links.forEach( link => link.addEventListener('click', changeSection));
