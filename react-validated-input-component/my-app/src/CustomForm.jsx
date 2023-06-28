import { useState } from 'react';
import './CustomForm.css';

export default function CustomForm() {
  const [valid, setValid] = useState('is-invalid');
  const [validFeedback, setValidFeedback] = useState('A password is required.');
  const [icon, setIcon] = useState('fa-x');

  function handleInput(e) {
    if (e.target.value === '') {
      setValid('is-invalid');
      setValidFeedback('A password is required.');
      setIcon('fa-x');
    } else if (e.target.value.length < 8) {
      setValid('is-invalid');
      setValidFeedback('Your password must be atleast 8 characters.');
      setIcon('fa-x');
    } else {
      setValid('is-valid');
      setIcon('fa-check');
    }
  }

  return (
    <form className="form-group m-5" novalidate>
      <label htmlFor="password">Password</label>
      <div>
        <input
          onChange={handleInput}
          className={`form-control ${valid} mr-2`}
          type="password"
          name="password"
          id="password"
        />
        <i class={`fa-solid ${icon}`}></i>
        <p className="invalid-feedback">{validFeedback}</p>
      </div>
    </form>
  );
}
