import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Products from './Products';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = "211d4f82";
  const YOUR_APP_KEY = "97dc92d80fa8f8682dc780e3612fe93f";

  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => setData(data.hits));
  }

  return (
    <div>
      <center>
        <h1>Food Recipe App</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /><br />
          <input type="submit" value="Search" />
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

root.render(<App />);
