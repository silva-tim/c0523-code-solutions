import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item nav-link">
              <Link to="/">Catalog</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
