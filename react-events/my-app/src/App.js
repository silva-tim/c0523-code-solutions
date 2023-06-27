import CustomButton from './CustomButton';
import './App.css';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <div className="App">
      <CustomButton
        onCustomClick={handleCustomClick}
        color="red"
        text="Hello"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        color="green"
        text="World"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        color="blue"
        text="Swag"
      />
    </div>
  );
}

export default App;
