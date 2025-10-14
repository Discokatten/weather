import getWeather from "../data/api";
import WeatherAnimation from "./weatheranimation";

export default async function WeatherWidget() {
  const weather = await getWeather();
  const current = weather.current;
  let location = "Stockholm, Sverige";

  return (
    <section className="flex content-center">

      {/* Get animation for current weather */}
      <WeatherAnimation weatherCodeProps={current.weather_code} />

        {/* Weather-data container */}
      <div className="content-center text-center">
        {/* Show temperature */}
        <h2 className=" text-2xl sm:text-7xl">
          {current.temperature_2m.slice(0, 3)}°C
        </h2>
        {/* Show location */}
        <h2 className="m-2 sm:text-xl">{location}</h2>
        {/* Show date and time */}
        <h3 className="m-2">
          {current.time.toUTCString().slice(0, 22)}
        </h3>

      </div>
    </section>
  );
}
