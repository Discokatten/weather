import WeatherAnimation from "@/app/components/weatheranimation";

export default function WeatherCard({
  temp,
  code,
  feels,
}: {
  temp: string;
  code: number;
  feels?: string;
}) {
  // Only show apparent temperature where applicable
  let apparent = "";
  if (feels) {
    apparent = `Feels like: ${feels} °C`;
  }
  return (
    <li className="bg-theme-800 rounded-2xl content-center text-center m-2">
      <p className="mt-2">{temp} °C</p>
      <p className="mt-2 text-s">{apparent}</p>
      <WeatherAnimation weatherCodeProps={code.toString()} />
    </li>
  );
}
