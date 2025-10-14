import WeatherAnimation from "./weatheranimation";

export default function WeatherCard({
  temp,
  code,
}: {
  temp: string;
  code: number;
}) {
  return (
    <li className="bg-theme-800 rounded-2xl h-35 w-25 content-center text-center mt-2">
      <p className="mt-2">{temp} °C</p>
      <WeatherAnimation weatherCodeProps={code.toString()} />
    </li>
  );
}
