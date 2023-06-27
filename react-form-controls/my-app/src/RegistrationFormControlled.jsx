import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('controlled input:', {
      username: username,
      password: password,
    });
    setUsername('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
        />
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
