import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
  const [val, setVal] = useState('');
  const [val2, setVal2] = useState('');

  useEffect(() => {
    console.log('Value 1: ' + val);
  }, [val]);

  useEffect(() => {
    console.log('Value 2: ' + val2);
  }, [val2]);

  return (
    <>
      <label>Favourite Phrase<input value={val} onChange={e => setVal(e.target.value)} /></label>
      <br />
      <label>Second Favourite Phrase<input value={val2} onChange={e => setVal2(e.target.value)} /></label>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);  