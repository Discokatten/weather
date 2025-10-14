import getWeather from "../data/api";

export default async function TimeOfDay() {
  const weather = await getWeather();
  const hourly = weather.hourly;
  const tempArray = Array.from(hourly.temperature_2m!);
  const timeArray = hourly.time.map((time) => time.getUTCHours());

  const morning = 8;
  const midday = 12;
  const evening = 18;

  return (
    <ul className="flex  justify-around content-center">
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        <p>time:{timeArray[morning]}</p>
        <p>temp:{tempArray[morning].toFixed(1)}</p>
      </li>
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        <p>time:{timeArray[midday]}</p>
        <p>temp:{tempArray[midday].toFixed(1)}</p>
      </li>
      <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center">
        <p>time:{timeArray[evening]}</p>
        <p>temp:{tempArray[evening].toFixed(1)}</p>
      </li>
    </ul>
  );
}
