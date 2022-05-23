import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(name) {
  return (
    <h1>Name of Lake: {name}</h1>
  );
}

function App() {
  return (
    <div>
      <Lake name='Lake Ontario' />
      <Lake name='Lake Huron' />
      <Lake name='Some Lake' />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);