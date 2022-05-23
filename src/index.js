import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Checkbox() {

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert('checked: ' + checked.toString());
  });

  return (
    <>
      <input type='checkbox' value={checked} onChange={() => setChecked(checked => !checked)} />
      {checked ? 'checked' : 'unchecked'}
    </>
  );
};

ReactDOM.render(
  <Checkbox />,
  document.getElementById("root"),
);  