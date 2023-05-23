const $spans = document.querySelectorAll('span');
const $btn = document.querySelector('button');
const $score = document.querySelector('#score');
let currentIndex = 0;
let wrongChar = $spans.length;
let failed = false;

$btn.addEventListener('click', reset);
document.addEventListener('keydown', checkKey);

function checkKey(event) {
  if (currentIndex + 1 === $spans.length) {
    $btn.classList.remove('btnOff');
    $score.classList.remove('scoreOff');
    $score.textContent =
      $score.textContent + Math.trunc((wrongChar / $spans.length) * 100) + '%';
  }

  if (event.key === $spans[currentIndex].textContent) {
    $spans[currentIndex].classList.remove('wrong', 'current');
    $spans[currentIndex].classList.add('correct');
    $spans[currentIndex + 1].classList.add('current');
    currentIndex++;
    failed = false;
  } else if (!failed) {
    $spans[currentIndex].classList.add('wrong');
    wrongChar--;
    failed = true;
  }
}

function reset(event) {
  currentIndex = 0;
  $spans.forEach(cleanUp);
  $spans[0].classList.add('current');
  $btn.classList.add('btnOff');
  $score.textContent = 'Your accuracy: ';
  $score.classList.add('scoreOff');
}

function cleanUp(currentValue, currentIndex) {
  $spans[currentIndex].classList.remove('wrong', 'current', 'correct');
}
