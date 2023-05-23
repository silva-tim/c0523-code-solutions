const $open = document.querySelector('.open');
const $close = document.querySelector('.close');
const $modal = document.querySelector('#modal');
const $backdrop = document.querySelector('#backdrop');

$open.addEventListener('click', openModal);
$close.addEventListener('click', closeModal);

function openModal(event) {
  $modal.classList.add('modalOn');
  $backdrop.classList.add('backdropOn');
}

function closeModal(event) {
  $modal.classList.remove('modalOn');
  $backdrop.classList.remove('backdropOn');
}
