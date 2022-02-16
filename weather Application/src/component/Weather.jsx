import React , { useEffect, useState }  from 'react'
import { MdLocationPin } from "react-icons/md"
import cloud from "../images/cloud.png"
import Haze from "../images/Haze.png"
import rain from "../images/rain.png"
import sun from "../images/sun.png"
import fog from "../images/fog.png"
import moon from "../images/moon.png"
import moonHaze from "../images/moonHaze.png"
import "./Weather.css";

const Weather = () => {
    const [finalweather , setfinalweather] = useState("karachi")
    const [currWeather , setWeather] = useState("");
    const [api , setapi] = useState(null);
    const cityName = _ => {
        setfinalweather(() => currWeather);
        setWeather("");
    }
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${finalweather}&appid=d4f833131ea6da8bf9a113b6691ad0fd&units=metric`)
        .then((res) => res.json())
        .then((result) => setapi(result))
        .catch((err) => console.log(err));
    } , [finalweather] );
    const date = new Date;
    const hour = date.getHours();
    const month = date.getMonth();
    const month_arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const final_month = month_arr[month];
    const date2 = date.getDate();
    const final_date = `${final_month} ${date2}`;
    const day = date.getDay();
    const day_arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const final_day = day_arr[day];
    const typeofweather = api && api.weather && api.weather[0] && api.weather[0].main;
    let image_src;
    switch (typeofweather){
        case "Sunny" && "Clear":
            if(hour >= 6 && hour <= 18){
                image_src = sun
            }else{
                image_src = moon
            }
            break;
        case "Haze":
            if(hour >= 6 && hour <= 18){
                image_src = Haze
            }else{
                image_src = moonHaze
            }
            break;
        case "Clouds":
            image_src = cloud
            break;
        case "Rain":
            image_src = rain
            break;
        case "Drizzle":
            image_src = rain
            break;
        case "Smoke":
            image_src = fog
            break;
    }
  return (
    <>
        <div className="MainBox">
            <h1>Weather Forecast</h1>
            <div className='container'>
                <div className="details">
                    <div className="cityname">
                        <MdLocationPin fontSize="24px" />
                        <h3>{api && api.name}</h3>
                    </div>
                    <div className="date">
                        <h4>{final_date}</h4>
                    </div>
                </div>
                <div className="day">{final_day}</div>
                <div className="temp">
                    <div className="image">
                        <img src={image_src} width="160px" height="160px" />
                        <h4>{typeofweather}</h4>
                    </div>
                    <div className="feel">
                        <div>{Math.round(api && api.main && api.main.temp)}<span>º</span></div>
                        <h4>Feels Like {Math.round(api && api.main && api.main.feels_like)}</h4>
                    </div>
                </div>
                <div className="input_field">
                    <input type="text"
                    autoFocus
                    placeholder='Enter Your City Name'
                    value={currWeather}
                    onChange={(e) => setWeather(e.target.value)} />
                    <button onClick={cityName}>Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Weather
