import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <div className="App">
      <CustomButton
        color="red"
        text="Hello"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="blue"
        text="World"
        onCustomClick={handleCustomClick}
      />
      <CustomButton color="green" text="!" onCustomClick={handleCustomClick} />
    </div>
  );
}

export default App;
