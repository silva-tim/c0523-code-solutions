import './App.css';
import SearchableList from './SearchableList';

const stringList = [
  { text: 'Yer a wizard Harry.', id: 0 },
  { text: "I hope you're pleased with yourselves.", id: 1 },
  { text: 'It does not do well to dwell on dreams and forget to live.', id: 2 },
  {
    text: 'To the well-organized mind, death is but the next great adventure.',
    id: 3,
  },
  {
    text: "You're a little scary sometimes, you know that? Brilliant... but scary.",
    id: 4,
  },
  {
    text: 'There will be no foolish wand-waving or silly incantations in this class.',
    id: 5,
  },
  {
    text: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
    id: 6,
  },
  {
    text: 'If there is one thing Voldemort cannot understan, it is love.',
    id: 7,
  },
  { text: 'As much money and life as you could want!', id: 8 },
  {
    text: 'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
    id: 9,
  },
  {
    text: "There are some thing you can't share without ending up liking each other.",
    id: 10,
  },
  { text: 'Ah, music. A magic beyond all we do here!', id: 11 },
];

function App() {
  return <SearchableList list={stringList} />;
}

export default App;
