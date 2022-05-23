import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
  const [status, setStatus] = useState("Open");  //hooks to add functionality to functoin
  /*
    status = state variable name
    setStatus = function to change the state variable
  */
  const [manager, setManager] = useState('Alex');
  const [year, setYear] = useState(2050);

  return (
    <>
      <div>
        <h1>Year: {year}</h1>
        <button onClick={() => setYear(year + 1)}>New Year</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager('Bob')}>Bob</button>
        <button onClick={() => setManager('Rachael')}>Rachael</button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus('Open')}>Open</button>
        <button onClick={() => setStatus('Closed')}>Closed</button>
        <button onClick={() => setStatus('Back In 5')}>Back in 5</button>
      </div>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);