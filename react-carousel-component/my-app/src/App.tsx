import './App.css';
import RotatingBanner from './RotatingBanner';

function App() {
  const items = [
    '/images/001.png',
    '/images/004.png',
    '/images/007.png',
    '/images/025.png',
    '/images/039.png',
  ];

  return <RotatingBanner images={items} />;
}

export default App;
