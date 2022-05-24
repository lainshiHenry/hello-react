import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  let apiCallURL = 'https://api.github.com/users/' + login;

  useEffect(() => {
    fetch(apiCallURL)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={150} />
      </div>
    );
  } else {
    return null;
  }

}

function App() {
  return (
    <GitHubUser login='lainshiHenry' />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);  