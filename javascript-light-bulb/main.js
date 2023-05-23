const $btn = document.querySelector('#switch');
const $bg = document.querySelector('body');

$btn.addEventListener('click', onClick);

function onClick(event) {
  $btn.classList.toggle('dark');
  $bg.classList.toggle('darkbg');
}
