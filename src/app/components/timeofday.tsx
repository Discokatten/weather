import getWeather from "../data/api";
import { TIMEOFDAY } from "../lib/consts";
import WeatherCard from "./weathercard";

export default async function TimeOfDay() {
  const weather = await getWeather();
  const hourly = weather.hourly;
  const tempArray = Array.from(hourly.temperature_2m!);
  const codeArray = Array.from(hourly.weather_code!);
  const feelsArray = Array.from(hourly.apparent_temperature!);

  return (
    <ul className="h-72 flex justify-between content-center text-white mt-2">
      {TIMEOFDAY.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center"
          >
            <p>{item.title}</p>
            <WeatherCard
              key={index}
              temp={tempArray[item.time].toFixed(1)}
              code={codeArray[index]}
              feels={feelsArray[item.time].toFixed(1)}
            />
          </div>
        );
      })}
    </ul>
  );
}
