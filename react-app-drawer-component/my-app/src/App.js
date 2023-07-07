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
  const [currentPage, setCurrentPage] = useState('About');
  function handleOpen() {
    setDrawerShown('open');
  }

  function handleClose(item) {
    setCurrentPage(`${item.title}`);
    setDrawerShown('closed');
  }

  return (
    <div>
      <div className="row">
        <FaBars className="icon" onClick={handleOpen} />
        <h1>{currentPage}</h1>
      </div>
      <AppDrawer
        drawerStatus={drawerShown}
        onClose={(item) => handleClose(item)}
        list={menuList}
      />
    </div>
  );
}

export default App;
