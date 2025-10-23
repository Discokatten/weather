import DailyForecast from "@/app/@weather/_components/dailyforecast";
import TimeOfDay from "@/app/@weather/_components/timeofday";
import WeatherDetails from "@/app/@weather/_components/weatherdetails";
import WeatherWidget from "@/app/@weather/_components/weatherwidget";

export default function RenderWeather() {
  return (
    <div>
      <WeatherWidget />
      <WeatherDetails />

      <TimeOfDay />
      <DailyForecast />
    </div>
  );
}
