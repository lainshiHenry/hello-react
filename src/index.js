import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const [first, , third] = [ //items in const [] are variables, can be used instead of indexing them
  'popcorn',
  'pretzels',
  'pineapple',
];

console.log(first);
console.log(third);

function Lake() {
  return (
    <h1>Visit the Lake!</h1>
  );
}

function SkiResort() {
  return (
    <h1>Visit the Ski Resort!</h1>

  );
}


function App() {
  return (
    <React.Fragment>
      <Lake />
      <SkiResort />
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);