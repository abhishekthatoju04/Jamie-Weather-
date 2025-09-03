
# Jamie-Weather-
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> f18fcf5 (initial commit)

A simple and responsive React.js weather application that fetches real-time weather information using the Open-Meteo API.


---

🚀 Features

Search weather by city name
Displays:

🌡️ Temperature (°C)

🌥️ Weather condition (clear, cloudy, rain, etc.)

💨 Wind speed
Error handling for invalid city names

Responsive and clean UI
---
🛠️ Tech Stack

React.js – Frontend framework

Open-Meteo API – Free weather data provider

CSS / Bootstrap / Tailwind (choose what you used) – Styling



---

📂 Project Setup

##Clone the repository:

git clone https://github.com/abhishekthatoju04/Jamie-Weather-.git
Navigate into the project:

cd Jamie-Weather-

Install dependencies:

npm install

Start the development server:

npm start

---

⚡ Usage

1. Enter a city name in the input box.

2. Click Search.

3. View the current weather details instantly.


## HOW CODE WORKS
Code Breakdown

1. WeatherApp.jsx

This is your main parent component.

It defines a weatherInfo state with default values (Delhi, 25°C, etc.).

It passes a function updateInfo down to the SearchBox so that when the user searches for a city, new weather data can be sent back up to update state.

It renders:

Title text

<SearchBox /> for input

<InfoBox /> to display results



➡️ Data flow:
User enters city → SearchBox fetches weather → calls updateInfo(newInfo) → updates weatherInfo → re-renders InfoBox with new data.


---

2. SearchBox.jsx

This component handles user input + API calls.

State used:

city → stores current text input

error → true/false to display error message


Functions:

1. getCoordinates(cityName)

Calls Open-Meteo Geocoding API to get latitude/longitude of the city.

Throws error if city not found.



2. getWeatherInfo()

Uses coordinates to call Open-Meteo Weather API.

Extracts temperature, windspeed, weather code, city name into an object.

Returns this object to parent.



3. handleChange(event)

Updates city state whenever user types.



4. handleSubmit(event)

Prevents default form refresh.

Calls getWeatherInfo().

If valid data → calls updateInfo(newInfo) (parent’s function).

Sets error state accordingly.

Clears input field afterwards.




UI:

A Material-UI TextField for city name.

A Button to submit.

Shows "No such place exists" if error === true.




---

3. InfoBox.jsx

This is the display component.

Props received: info object (city, temp, windspeed, weather).

Chooses a background image:

HOT_URL → when temp > 20

COLD_URL → when temp <= 20

(Rain URL declared but not used here 🤔).


Icons:

☀️ WbSunnyIcon if weather code is 0 (clear sky)

⛈️ ThunderstormIcon if weather code between 51–67 (rain)

❄️ AcUnitIcon if temp < 10°C

Default → sunny icon


Renders:

Card with city name and weather icon

Temperature, windspeed, weather code



---

🔄 Flow in Action

1. User types "Hyderabad" → clicks search


2. getCoordinates("Hyderabad") → gets lat/lon


3. getWeatherInfo() → fetches temperature, windspeed, weather code


4. Calls updateInfo(newInfo) → updates weatherInfo state in WeatherApp


5. InfoBox re-renders with Hyderabad’s weather
