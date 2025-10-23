import getWeather from "@/app/data/api";
import { TIMEOFDAY } from "@/app/lib/consts";
import WeatherCard from "@/app/@weather/_components/weathercard";

export default async function TimeOfDay() {
  const weather = await getWeather();
  const hourly = weather.hourly;
  const tempArray = Array.from(hourly.temperature_2m!);
  const codeArray = Array.from(hourly.weather_code!);
  const feelsArray = Array.from(hourly.apparent_temperature!);

  return (
    <ul className="h-72 flex justify-around content-center">
      {TIMEOFDAY.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-2xl h-50 w-50 content-center text-center"
          >
            <p className="text-2xl">{item.title}:</p>
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
