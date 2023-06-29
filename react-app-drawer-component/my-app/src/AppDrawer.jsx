import './AppDrawer.css';

export default function AppDrawer({ list }) {
  const menuBarLinks = [];
  for (let i = 0; i < list.length; i++) {
    menuBarLinks.push(<MenuItem item={list[i]} />);
  }

  return (
    <div>
      <Heading />
      {menuBarLinks}
    </div>
  );
}

function Heading() {
  return <h3>Menu</h3>;
}

function MenuItem({ item }) {
  return <button>{item.title}</button>;
}
