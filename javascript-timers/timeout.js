const $heading = document.querySelector('h1');

function changeHead() {
  $heading.textContent = 'Hello There';
}

setTimeout(changeHead, 2000);
