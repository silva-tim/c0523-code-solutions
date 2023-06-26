import './App.css';
import CustomComponent from './CustomComponent';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  function handleUp() {
    setCount(count + 1);
  }

  function handleDown() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <CustomComponent onUp={handleUp} onDown={handleDown} count={count} />
    </div>
  );
}

export default App;
