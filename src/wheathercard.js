import { useState, useEffect } from "react";

const Wheathercard = ({ tempInfo }) => {
    const [searchbar, setsearchbar] = useState("kolkata");
    const {
        temp, temp_min, temp_max, humidity, main, name, country
    } = tempInfo;

    const datebuilder = (d) => {
        let months = ['January', 'February',
            'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        if (date < 10) {
            date = `0${date}`
        }
        return `${day} ${date} ${month} ${year}`;
    }
    return (
        <>
            <div className="place-date">
                <h2>{name}, {country}</h2>
                <h3>{datebuilder(new Date())}</h3>
            </div>
            <div className="temp-box">
                <h2>{temp}°C</h2>
                <h3>{main}</h3>
            </div>
            <div className="footer-box">
                <h3>Min-Temp: {temp_min}°C</h3>
                <h3>Humidity: {humidity}%</h3>
                <h3>Max-Temp: {temp_max}°C</h3>


            </div>
        </>
    )
}

export default Wheathercard;