const $images = document.querySelectorAll('img');
const $dots = document.querySelectorAll('.dot');
const $leftRightRow = document.querySelector('#leftRight');
const $dotRow = document.querySelector('#dotRow');
let autoSwap = true;
let currentImg = 0;

$leftRightRow.addEventListener('click', handleSwitch);
$dotRow.addEventListener('click', handleDot);

function swap(imgID) {
  if (currentImg === $images.length - 1 && autoSwap === true) {
    imgID = 0;
  }
  autoSwap = true;

  $images.forEach(function (currentValue) {
    currentValue.classList.add('hidden');
  });
  $images.item(imgID).classList.remove('hidden');

  $dots.forEach(function (currentValue) {
    currentValue.classList.replace('fa-solid', 'fa-regular');
  });
  $dots.item(imgID).classList.replace('fa-regular', 'fa-solid');

  currentImg = imgID;
}

function handleSwitch(event) {
  clearInterval(currentInterval);
  autoSwap = false;
  if (event.target.id === 'left') {
    if (currentImg === 0) {
      swap($images.length - 1);
    } else {
      swap(currentImg - 1);
    }
  } else if (event.target.id === 'right') {
    if (currentImg === $images.length - 1) {
      swap(0);
    } else {
      swap(currentImg + 1);
    }
  }
  runInterval();
}

function handleDot(event) {
  clearInterval(currentInterval);
  autoSwap = false;
  for (let i = 0; i < $dots.length; i++) {
    if ($dots[i] === event.target) {
      swap(i);
    }
  }
  runInterval();
}

function autoSwapping() {
  swap(currentImg + 1);
}

let currentInterval;

function runInterval() {
  currentInterval = setInterval(autoSwapping, 3000);
}
runInterval();
