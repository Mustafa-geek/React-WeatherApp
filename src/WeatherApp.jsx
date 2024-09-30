import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
 let [weatherInfo , setweatherInfo] = useState({
    city: "delhi",
    feelsLike: 37.73,
    humidity: 70,
    temp: 31.05,
    tempMax: 31.05,
    tempMin: 31.05,
    weather: "haze",
 })

let updateWeatherInfo = (result)=>{  //getting result from SearchBox 
    setweatherInfo(result)
}

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Weather App</h3>
      <SearchBox searchInfo = {updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
