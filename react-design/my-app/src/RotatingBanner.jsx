import { useState } from 'react';
import './RotatingBanner.css';

export default function RotatingBanner({ items }) {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex((index + 1) % items.length);
  }

  function handlePrev() {
    setIndex((index - 1 + items.length) % items.length);
  }

  function handleIndicate(currentIndex) {
    console.log(2);
    setIndex(currentIndex);
  }

  return (
    <div>
      <Banner item={items[index]} />
      <PrevButton onPrev={handlePrev} />
      <Indicators
        onIndicate={handleIndicate}
        currentIndex={index}
        count={items.length}
      />
      <NextButton onNext={handleNext} />
    </div>
  );
}

function Banner({ item }) {
  return <h2>{item}</h2>;
}

function NextButton({ onNext }) {
  return <button onClick={onNext}>Next</button>;
}

function PrevButton({ onPrev }) {
  return <button onClick={onPrev}>Prev</button>;
}

function Indicators({ onIndicate, count, currentIndex }) {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    if (i === currentIndex) {
      buttons.push(
        <button className="current" key={i}>
          {i}
        </button>
      );
    } else {
      buttons.push(
        <button onClick={() => onIndicate(i)} key={i}>
          {i}
        </button>
      );
    }
  }
  return <div>{buttons}</div>;
}
