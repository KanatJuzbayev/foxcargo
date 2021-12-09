const arrows = document.querySelectorAll('.select__arrow');
let selected = false;

function selection() {
  const text = document.querySelector(`p[data-key="${this.dataset.key}"]`);
  const selectActive = document.querySelector('.select__text.select__active');
  const key = this.dataset.key;

  if (!selected) {
    text.classList.add('select__active');
    selected = true;
  } else if (selected && ( key !== selectActive.dataset.key)) {
    selectActive.classList.remove('select__active');
    text.classList.add('select__active');
    selected = true;
  } else if (selected && ( key == selectActive.dataset.key)) {
    selectActive.classList.remove('select__active');
    selected = false;
  }
}

arrows.forEach(key => key.addEventListener('click', selection));
