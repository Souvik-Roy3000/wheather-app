import { useState, useEffect } from "react";
import Wheathercard from "./wheathercard";
import "./app.css"
function App() {
  const [searchbar, setsearchbar] = useState("kolkata");
  const [tempInfo, settempInfo] = useState({});


  const wheatherInfo = async (event) => {
    try {
      // if (event.key === "Enter") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchbar}&units=metric&appid=eea33e220e4d402825ecde16f17d1f0d`;
      let res = await fetch(url);
      let data = await res.json();

      let { temp, temp_min, temp_max, humidity } = data.main;
      let { main } = data.weather[0];
      let { name } = data;
      let { country } = data.sys;


      let myWeatherInfo = {
        temp, temp_min, temp_max, humidity, main, name, country
      };
      settempInfo(myWeatherInfo);
      // }

    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    wheatherInfo();
  }, [])

  console.log(tempInfo.main);
  return (
    <>
      <section className="container">
        <div className={(tempInfo.main === "clouds") ? "clouds appbox"
          : (tempInfo.main === "Rain") ? "rain appbox"
            : (tempInfo.temp < 10) ? "snow appbox"
              : (tempInfo.temp > 30) ? "sunny appbox"
                : "clouds appbox"

        }>
          <div className="search-box">
            <input type="text" className="search" placeholder="Search..." value={searchbar} onChange={(e) => { setsearchbar(e.target.value) }}
              onKeyPress={(e) => { if (e.key === "Enter") { wheatherInfo() } }} />
          </div>
          <Wheathercard tempInfo={tempInfo} />
        </div>
      </section>
    </>
  );
}

export default App;
