import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Hello!" color="red" />
      <ToggleButton text="World" color="blue" />
      <ToggleButton text="Tim" color="green" />
    </div>
  );
}

export default App;
