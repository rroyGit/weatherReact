import React from 'react';

// const api = {
//   key: "dda0d6f285508de681a47386a7cba7b2",
//   base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID="
// }

function App() {

  const dateBuilder = (d) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`
  }

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
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15 C</div>
          <div className="weather">Sunny</div>
        </div>

      </main>
    </div>
  );
}

export default App;
