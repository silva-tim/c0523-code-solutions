export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const submission = Object.fromEntries(formData.entries());
    console.log('uncontrolled input:', submission);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
