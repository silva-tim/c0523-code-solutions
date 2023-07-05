import { FaBars } from 'react-icons/fa';
import './App.css';
import AppDrawer from './AppDrawer';
import { useState } from 'react';

const menuList = [
  { title: 'About' },
  { title: 'Get Started' },
  { title: 'Sign In' },
];

function App() {
  const [drawerShown, setDrawerShown] = useState('closed');
  function handleOpen() {
    setDrawerShown('open');
  }

  function handleClose(e) {
    setDrawerShown('closed');
  }

  return (
    <div>
      <FaBars className="icon" onClick={handleOpen} />
      <AppDrawer
        drawerStatus={drawerShown}
        onClose={handleClose}
        list={menuList}
      />
    </div>
  );
}

export default App;
