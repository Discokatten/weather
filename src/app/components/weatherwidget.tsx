import getWeather from "../data/api";
import LottieComponent from "./lottiecomponent";

export default async function WeatherWidget() {
    const weather = await getWeather();
    const current = weather.current;
    let location = "Stockholm, Sverige"
  return (
    <section className="flex content-center">
        {/* animation from Lottie */}
      <LottieComponent />
      {/* current weather, time and place. Mockdata when testing */}
      <div className="content-center text-center">
        <h2 className=" text-2xl sm:text-7xl">{current.temperature_2m.slice(0, 2)}°C</h2>
        {/* <h2 className="text-4xl sm:text-7xl">10°C</h2> */}
        <h2 className="m-2 sm:text-xl">{location}</h2>
        <h3 className="m-2">{current.time.toLocaleString().slice(0, 16)}</h3>
        {/* <h3 className="m-2">2025-10-09 13:45</h3> */}
      </div>
    </section>
  );
}
