import { useState } from 'react';
import './CustomForm.css';

export default function CustomForm() {
  const [currentValue, setValue] = useState('');
  let valid = 'is-invalid';
  let validFeedback = 'A password is required.';
  let icon = 'fa-x';

  if (currentValue === '') {
    valid = 'is-invalid';
    validFeedback = 'A password is required.';
    icon = 'fa-x';
  } else if (currentValue.length < 8) {
    valid = 'is-invalid';
    validFeedback = 'Your password must be atleast 8 characters.';
    icon = 'fa-x';
  } else {
    valid = 'is-valid';
    icon = 'fa-check';
  }

  return (
    <form className="form-group m-5" noValidate>
      <label htmlFor="password">Password</label>
      <div>
        <input
          value={currentValue}
          onChange={(e) => setValue(e.target.value)}
          className={`form-control ${valid} mr-2`}
          type="password"
          name="password"
          id="password"
        />
        <i className={`fa-solid ${icon}`}></i>
        <p className="invalid-feedback">{validFeedback}</p>
      </div>
    </form>
  );
}
