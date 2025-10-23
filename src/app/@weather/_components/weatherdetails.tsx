import getWeather from "@/app/data/api";

export default async function WeatherDetails() {
  const weather = await getWeather();
  const current = weather.current;

  return (
    <ul className="h-60 flex justify-around wrap md:w-250 mt-2">
      <li className="bg-theme-800 rounded-2xl md:h-50 md:w-40 content-center text-center">
        <p className="mb-2">Feels like</p>
        <p>{current.apparent_temperature.slice(0, 3)} °C</p>
      </li>

      <li className="bg-theme-800 rounded-2xl md:h-50 md:w-40 content-center text-center">
        <p className="mb-2">Luftfuktighet</p>
        <p>{current.relative_humidity_2m.slice(0, 2)}%</p>
      </li>

      <li className="bg-theme-800 rounded-2xl md:h-50 md:w-40 content-center text-center">
        <p className="mb-2">Vind</p>
        <p>{current.wind_speed_10m.slice(0, 3)} m/s</p>
      </li>

      <li className="bg-theme-800 rounded-2xl md:h-50 md:w-40 content-center text-center">
        <p className="mb-2">Förväntad nederbörd</p>
        <p>{current.precipitation.slice(0, 3)} mm</p>
      </li>
    </ul>
  );
}
