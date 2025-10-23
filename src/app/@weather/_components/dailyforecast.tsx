import getWeather from "@/app/data/api";
import WeatherCard from "@/app/@weather/_components/weathercard";
export default async function DailyForecast() {
  const weather = await getWeather();
  const forecast = weather.daily;

  // Convert float32array to regular array
  const tempArray = Array.from(forecast.temperature_2m_mean!);
  const codeArray = Array.from(forecast.weather_code!);

  return (
    <ul className="h-72 flex justify-between wrap md:w-250 content-center">
      {tempArray.map((temp, index) => (
        <WeatherCard
          key={index}
          temp={temp.toFixed(1)}
          code={codeArray[index]}
        />
      ))}
    </ul>
  );
}
