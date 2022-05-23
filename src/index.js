import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: '1', name: 'Lake Huron', trailhead: 'huron' },
  { id: '2', name: 'Lake Ontario', trailhead: 'Ontario' },
  { id: '3', name: 'Some Big Lakes', trailhead: 'Biglakes' },
];

function App({ lakes }) {
  return (
    <div>

      {lakes.map(lake =>
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessed By: {lake.trailhead}</p>
        </div>)}

    </div>
  );
}

ReactDOM.render(
  <App lakes={lakeList} />,
  document.getElementById("root"),
);