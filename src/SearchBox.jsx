import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const getCoordinates = async (cityName) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    if (!data.results || data.results.length === 0) throw new Error("No results");
    return data.results[0];
  };

  const getWeatherInfo = async () => {
    try {
      const loc = await getCoordinates(city);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`
      );
      if (!response.ok) throw new Error("Weather fetch failed");

      const data = await response.json();
      let result = {
        city: loc.name,
        temp: data.current_weather.temperature,
        windspeed: data.current_weather.windspeed,
        weather: data.current_weather.weathercode,
      };
      return result;
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(true);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      if (newInfo) {
        updateInfo(newInfo);
        setError(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setCity("");
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
