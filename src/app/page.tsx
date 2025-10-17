import Hero from "./components/hero";
import WeatherDetails from "./components/weatherdetails";
import DailyForecast from "./components/dailyforecast";
import TimeOfDay from "./components/timeofday";
import FilterClothes from "./components/filterclothes";

export default async function Home() {
  return (
    <>
      <h1 className="text-white text-6xl text-center m-4">
        What to wear today?
      </h1>

      <main className=" flex flex-row-reverse justify-center flex-wrap gap-4  text-white">
        {/* clothes content container */}
        <section className=" h-150 rounded-2xl bg-theme-800 min-w-100">
          <FilterClothes />
        </section>

        {/* weather content container */}
        <article className="w-200">
          <Hero />

          {/*weather details section */}
          <section className="h-75">
            <WeatherDetails />
            <TimeOfDay />
          </section>

          {/* daily forecast section */}
          <section className="h-75 mt-4">
            <h2 className="text-2xl">Daily forecast</h2>
            <DailyForecast />
          </section>
        </article>
      </main>
    </>
  );
}
