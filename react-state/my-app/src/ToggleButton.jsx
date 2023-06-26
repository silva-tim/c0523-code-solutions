import { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton({ text, color }) {
  let [isClicked, setIsClicked] = useState(false);
  console.log('useState:', isClicked);

  function handleClick() {
    console.log('before setter:', isClicked);
    isClicked ? setIsClicked(false) : setIsClicked(true);
    console.log('after setter:', isClicked);
  }

  if (isClicked) {
    return (
      <button onClick={handleClick} className="white">
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} className={color}>
        {text}
      </button>
    );
  }
}
