import React from 'react';

// const api = {
//   key: "dda0d6f285508de681a47386a7cba7b2",
//   base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID="
// }

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
