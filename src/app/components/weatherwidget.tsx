// import getWeather from "../data/api";
import LottieComponent from "./lottiecomponent";

export default async function WeatherWidget() {
  // const weather = await getWeather();
  // const current = weather.current;
  let location = "Stockholm, Sverige";
  return (
    <section className="flex content-center">
      {/* animation from Lottie, TO DO change to dynamic depending on weather */}
      <LottieComponent />
      {/* Mockdata when testing */}
      <div className="content-center text-center">

        {/* Show temperature */}
        <h2 className=" text-2xl sm:text-7xl">
          10°C
          {/* {current.temperature_2m.slice(0, 3)}°C */}
        </h2>

        {/* Show location */}
        <h2 className="m-2 sm:text-xl">{location}</h2>

        {/* Show date and time */}
        <h3 className="m-2">
          2025-10-09 13:45
          {/* {current.time.toUTCString().slice(0, 22)} */}
        </h3>
      </div>
    </section>
  );
}
