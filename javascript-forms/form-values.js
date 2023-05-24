const $form = document.querySelector('form#contact-form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const submission = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value,
  };
  console.log(submission);
  $form.reset();
}
