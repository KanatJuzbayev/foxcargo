//show Request Form
const requestButtons = document.querySelectorAll('.request__button');
const body = document.querySelectorAll('body');

function showRequestForm() {
  const request = document.querySelector('.request');
  request.classList.add('request-active');
}

requestButtons.forEach( requestButton => requestButton.addEventListener('click', showRequestForm));


//close Request Form
const closeRequestButtons = document.querySelectorAll('.request__close');

function closeRequestForm() {
  const request = document.querySelector('.request');
  request.classList.remove('request-active');
}

closeRequestButtons.forEach( closeRequestButton => closeRequestButton.addEventListener('click', closeRequestForm));


const request = document.querySelector('.request');

request.addEventListener('click', function(e) {
  if (!e.target.closest('.request__wrapper')) {
    closeRequestForm();
  }
});
