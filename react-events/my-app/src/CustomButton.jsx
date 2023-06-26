import './CustomButton.css';

export default function CustomButton({ color, text, onCustomClick }) {
  return (
    <button onClick={() => onCustomClick(text)} className={color}>
      {text}
    </button>
  );
}
