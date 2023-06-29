import './Accordion.css';
import { useState } from 'react';

export default function Accordion({ listOfTopics }) {
  const [current, setCurrent] = useState('');

  function handleCustomClick(e) {
    if (e.target.textContent === current) {
      setCurrent('');
    } else {
      setCurrent(e.target.textContent);
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
      <button onClick={onCustomClick} type="button">
        {item.title}
      </button>
      <p className={currentClicked === item.title ? '' : 'hidden'}>
        {item.text}
      </p>
    </div>
  );
}
