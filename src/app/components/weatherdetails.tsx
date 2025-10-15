import getWeather from "../data/api";

export default async function WeatherDetails() {
  const weather = await getWeather();
  const current = weather.current;

  return (
    <ul className="flex justify-between content-center text-white mt-2">
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        <p className="mb-2">Feels like</p>
        <p>{current.apparent_temperature.slice(0, 3)} °C</p>
      </li>

      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center text-pretty">
        <p className="mb-2">Luftfuktighet</p>
        <p>{current.relative_humidity_2m.slice(0, 2)}%</p>
      </li>

      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        <p className="mb-2">Vind</p>
        <p>{current.wind_speed_10m.slice(0, 3)} m/s</p>
      </li>

      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        <p className="mb-2">Förväntad nederbörd</p>
        <p>{current.precipitation.slice(0, 3)} mm</p>
      </li>
    </ul>
  );
}
