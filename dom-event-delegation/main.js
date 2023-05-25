const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  // Can also use (event.target.tagName === 'BUTTON")
  if (event.target.matches('button')) {
    const $taskItem = event.target.closest('.task-list-item');
    console.log('closest .task-list-item:', $taskItem);
    $taskItem.remove();
  }
}
