import './CustomComponent.css';

export default function CustomComponent({ onUp, onDown, count }) {
  return (
    <div className="container">
      <button onClick={onDown}>Down</button>
      <p>{count}</p>
      <button onClick={onUp}>Up</button>
    </div>
  );
}
