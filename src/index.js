import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({ name }) {
  return (
    <div>
      <h1>Visit the {name} Lake!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit the {name} Ski Resort!</h1>
    </div>
  );
}


function App(props) {
  return props.season === 'summer' ?
    (
      <Lake name={props.season} />
    ) :
    (props.season === 'winter' ?
      (<SkiResort name={props.season} />) :
      (<h1>Come back another time</h1>)
    );

}

ReactDOM.render(
  <App season='other' />,
  document.getElementById("root"),
);