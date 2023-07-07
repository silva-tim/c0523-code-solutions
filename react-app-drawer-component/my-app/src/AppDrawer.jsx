import './AppDrawer.css';

export default function AppDrawer({ drawerStatus, onClose, list }) {
  const menuBarLinks = list.map((element) => (
    <MenuItem onClose={(item) => onClose(item)} item={element} />
  ));

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
  return (
    <button type="button" onClick={() => onClose(item)}>
      {item.title}
    </button>
  );
}
