import { useState } from 'react';
import './RotatingBanner.css';

export default function RotatingBanner({ items }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Banner item={items[index]} />
      <PrevButton />
      <Indicators currentIndex={index} count={items.length} />
      <NextButton />
    </div>
  );
}

function Banner({ item }) {
  return <h2>{item}</h2>;
}

function NextButton() {
  return <button>Next</button>;
}

function PrevButton() {
  return <button>Prev</button>;
}

function Indicators({ count, currentIndex }) {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    if (i === currentIndex) {
      buttons.push(
        <button className="current" key={i}>
          {i}
        </button>
      );
    } else {
      buttons.push(<button key={i}>{i}</button>);
    }
  }
  return <div>{buttons}</div>;
}
