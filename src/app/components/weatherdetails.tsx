// import getWeather from "../data/api";

export default async function WeatherDetails() {
  // const weather = await getWeather();
  // const current = weather.current;

  return (
    <ul className="h-72 flex justify-between content-center text-white">
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        Feels Like 17 °C
        {/* Feels Like {current.apparent_temperature.slice(0, 4)}  */}

      </li>
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        Luftfuktighet 78%
        {/* Luftfuktighet {current.relative_humidity_2m.slice(0, 4)} % */}
      </li>
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        Vind 13 m/s
        {/* Vind {current.wind_speed_10m.slice(0, 2)} m/s */}
      </li>
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        Nederbörd 3 mm
        {/* Nederbörd {current.precipitation.slice(0, 3)} mm */}
      </li>
    </ul>
  );
}
