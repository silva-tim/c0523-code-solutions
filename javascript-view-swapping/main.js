const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleTab);

function handleTab(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].classList.add('active');
      } else {
        $tabs[i].classList.remove('active');
      }
    }

    const $dataView = event.target.getAttribute('data-view');

    for (let i = 0; i < $views.length; i++) {
      if ($views[i].getAttribute('data-view') === $dataView) {
        $views[i].classList.remove('hidden');
      } else {
        $views[i].classList.add('hidden');
      }
    }
  }
}
