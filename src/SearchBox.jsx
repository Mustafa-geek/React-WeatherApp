import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({searchInfo}) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "70ae1cf218a69c22e26bbbc98ed5f3e2";

  let getWeatherInfo = async() => {
    let ans = await fetch (`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
    let jsonAns = await ans.json()
    let result = {
      city:city,
      temp:jsonAns.main.temp,
      tempMin:jsonAns.main.temp_max,
      tempMax:jsonAns.main.temp_min,
      feelsLike:jsonAns.main.feels_like,
      humidity:jsonAns.main.humidity,
      weather:jsonAns.weather[0].description,
    }
    console.log(result)
    return result;
  }

  let chngCity = (event) => {
    setCity(event.target.value); // Update city as the user types
  };

  let handleSubmit = async (event)=>{
    event.preventDefault()     // Prevents page reload
    setCity("")
    let res = await getWeatherInfo();
    searchInfo(res)         //searchInfo prop mei info yahan se send karre
  }

  return (
    <div className="SearchBox">
      <h3>Search for Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={chngCity}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
