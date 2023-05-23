let clicks = 0;

const btn = document.querySelector('.hot-button');

const clickCounter = document.querySelector('.click-count');

btn.addEventListener('click', onClick);

function onClick(event) {
  clicks++;
  clickCounter.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    btn.className = 'hot-button cold';
  } else if (clicks < 7) {
    btn.className = 'hot-button cool';
  } else if (clicks < 10) {
    btn.className = 'hot-button tepid';
  } else if (clicks < 13) {
    btn.className = 'hot-button warm';
  } else if (clicks < 16) {
    btn.className = 'hot-button hot';
  } else {
    btn.className = 'hot-button nuclear';
  }
}
