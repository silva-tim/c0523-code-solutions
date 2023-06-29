import { FaBars } from 'react-icons/fa';
import './App.css';
import AppDrawer from './AppDrawer';

const menuList = [
  { title: 'About' },
  { title: 'Get Started' },
  { title: 'Sign In' },
];

function App() {
  return (
    <div>
      <FaBars />
      <AppDrawer list={menuList} />
    </div>
  );
}

export default App;
