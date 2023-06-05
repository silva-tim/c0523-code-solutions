const $heading = document.querySelector('h1');
let count = 4;

function countdown() {
  if (count > 1) {
    count--;
    $heading.textContent = `${count}`;
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(nIntervId);
  }
}

const nIntervId = setInterval(countdown, 1000);
