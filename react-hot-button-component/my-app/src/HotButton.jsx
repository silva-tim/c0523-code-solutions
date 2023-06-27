import './HotButton.css';
import { useState } from 'react';

export default function HotButton() {
  const [count, setCount] = useState(0);
  const [temp, setTemp] = useState('cold');

  function handleClick() {
    setCount(count + 1);
    if (count > 13) {
      setTemp('nuclear');
    } else if (count > 10) {
      setTemp('hot');
    } else if (count > 7) {
      setTemp('warm');
    } else if (count > 4) {
      setTemp('cool');
    } else if (count > 1) {
      setTemp('chilly');
    } else {
      setTemp('cold');
    }
  }

  return (
    <>
      <div className="container">
        <button onClick={handleClick} className={temp}>
          Hot Button
        </button>
      </div>
      <div className="container">
        <h1>{count}</h1>
      </div>
    </>
  );
}
