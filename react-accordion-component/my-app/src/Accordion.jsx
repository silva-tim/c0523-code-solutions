import './Accordion.css';
import { useState } from 'react';

export default function Accordion({ listOfTopics }) {
  const [current, setCurrent] = useState('');

  function handleCustomClick(clickedButton) {
    if (clickedButton === current) {
      setCurrent('');
    } else {
      setCurrent(clickedButton);
    }
  }

  const topicsArray = [];
  for (let i = 0; i < listOfTopics.length; i++) {
    topicsArray.push(
      <Topic
        key={listOfTopics[i].id}
        currentClicked={current}
        onCustomClick={handleCustomClick}
        item={listOfTopics[i]}
      />
    );
  }

  return <div>{topicsArray}</div>;
}

function Topic({ item, onCustomClick, currentClicked }) {
  return (
    <div>
      <button
        onClick={(e) => onCustomClick(e.target.textContent)}
        type="button">
        {item.title}
      </button>
      <p className={currentClicked === item.title ? '' : 'hidden'}>
        {item.text}
      </p>
    </div>
  );
}
