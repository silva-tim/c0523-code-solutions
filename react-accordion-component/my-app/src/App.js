import './App.css';
import Accordion from './Accordion';

/**
 * @param {Object[]} topics - a list of topic objects
 * @param {string} topics[].title - a property that has the title of the topic
 * @param {string} topics[].text - a property that has the text information for the topic
 * @param {number} topics[].id - a property that contains a unique number id
 */

const topics = [
  {
    id: 0,
    title: 'Hypertext Markup Language',
    text: "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images.",
  },
  {
    id: 1,
    title: 'Cascading Style Sheets',
    text: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
  },
  {
    id: 2,
    title: 'JavaScript',
    text: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
  },
];

function App() {
  return <Accordion listOfTopics={topics} />;
}

export default App;
