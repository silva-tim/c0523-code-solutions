import './ToggleSwitch.css';
import { useState } from 'react';

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);
  const [values, setValues] = useState({
    text: 'Off',
    bg: 'gray',
    position: 'left',
  });

  function handleToggle() {
    if (toggle) {
      setToggle(false);
      setValues({ text: 'Off', bg: 'gray', position: 'left' });
    } else {
      setToggle(true);
      setValues({ text: 'On', bg: 'green', position: 'right' });
    }
  }
  return (
    <div className="container">
      <div onClick={handleToggle} className={`switch ${values.bg}`}>
        <div className={`circle ${values.position}`}></div>
      </div>
      <h1>{values.text}</h1>
    </div>
  );
}
