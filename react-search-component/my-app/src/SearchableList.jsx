import './SearchableList.css';
import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function SearchableList({ list }) {
  const [value, setValue] = useState('');
  let currentRender = [...list];

  if (!value) {
    currentRender = [...list];
  } else {
    currentRender = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].text.toLowerCase().includes(value.toLowerCase())) {
        currentRender.push(list[i]);
      }
    }
  }

  return (
    <div>
      <FaMagnifyingGlass className="icon" />
      <SearchBar onCustomChange={(e) => setValue(e.target.value)} />
      <ItemList listToRender={currentRender} />
    </div>
  );
}

function SearchBar({ onCustomChange, value }) {
  return <input value={value} onChange={onCustomChange} type="search"></input>;
}

function ItemList({ listToRender }) {
  if (listToRender.length < 1) {
    return <p>No items match the filter.</p>;
  }
  const listItems = listToRender.map((element) => (
    <li key={element.id}>{element.text}</li>
  ));
  return <ul>{listItems}</ul>;
}
