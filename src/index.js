import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props) {
  console.log(Object.keys(props)); //return array of keys from props
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>Let's build something cool.</p>
      <p>{props.message} x{Object.keys(props).length}</p>
      <ul>
        <li>Good Food</li>
        <li>Honey Water</li>
        <li>Sushi</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <Hello library="React!!" message="Have Fun!" number={3} />,
  document.getElementById("root"),
);