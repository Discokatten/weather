import getWeather from "@/app/data/api";
import WeatherAnimation from "@/app/components/weatheranimation";

export default async function WeatherWidget() {
  const weather = await getWeather();
  const current = weather.current;
  let location = "Stockholm, Sverige";

  return (
    <section className="flex bg-[url(/hero.svg)] bg-no-repeat bg-cover bg-center rounded-2xl h-77 md:max-w-240">
      {/* Get animation for current weather */}
      <div className="mr-0 ml-auto">
        <WeatherAnimation weatherCode={current.weather_code} />
      </div>

      {/* Weather-data container */}
      <div className="content-center text-center mr-auto ml-0">
        {/* Show temperature */}
        <h2 className=" text-2xl sm:text-7xl">
          {current.temperature_2m.slice(0, 3)}°C
        </h2>
        {/* Show location */}
        <h2 className="m-2 sm:text-xl">{location}</h2>
        {/* Show date and time */}
        <h3 className="m-2">{current.time.toUTCString().slice(0, 22)}</h3>
      </div>
    </section>
  );
}
