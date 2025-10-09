import WeatherWidget from "./weatherwidget";

export default function Hero() {
  return (
    // background for hero
    <div className="bg-[url(/hero.svg)] bg-no-repeat bg-cover bg-center rounded-2xl h-77 text-white max-w-200">
      <WeatherWidget />
    </div>
  );
}
