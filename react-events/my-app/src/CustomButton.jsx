import './CustomButton.css';

export default function CustomButton({ text, color, onCustomClick }) {
  return (
    <button onClick={() => onCustomClick(text)} className={color}>
      {text}
    </button>
  );
}
