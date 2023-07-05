import './AppDrawer.css';

export default function AppDrawer({ drawerStatus, onClose, list }) {
  const menuBarLinks = [];
  for (let i = 0; i < list.length; i++) {
    menuBarLinks.push(<MenuItem onClose={onClose} item={list[i]} />);
  }

  return (
    <div className={`${drawerStatus === 'open' ? '' : 'hidden'}`}>
      <div className="drawer">
        <Heading />
        {menuBarLinks}
      </div>
      <div onClick={onClose} className="background"></div>
    </div>
  );
}

function Heading() {
  return <h3>Menu</h3>;
}

function MenuItem({ onClose, item }) {
  return <button onClick={onClose}>{item.title}</button>;
}
