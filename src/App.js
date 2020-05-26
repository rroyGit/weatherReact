import React, { useState } from 'react';

//Sample API key (replace with your own key)
const api = {
  key: "dda0d6f285508de681a47386a7cba7b2",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=imperial&&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          if (result.hasOwnProperty("cod") && result.cod !== undefined && result.cod === "404") {
            throw result;
          }
          setQuery('');
          setWeather(result);
          console.log(result);
        })
        .catch (err => setQuery(err.message));
      }
  }

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
    <div className={(typeof weather.main !== "undefined") ? ((weather.main.temp > 37) ? "app warm" : "app") : "app warm"}>
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main !== "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}°f</div>
        <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}

      </main>
    </div>
  );
}

export default App;
