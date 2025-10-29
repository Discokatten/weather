import WeatherAnimation from "@/app/components/weatheranimation";

export default function WeatherCard({
  temp,
  code,
  feels,
  title,
}: {
  temp: string;
  code: number;
  feels?: string;
  title?: string;
}) {
  return (
    <li className="bg-theme-800 border-2 p-2 border-theme-600 rounded-2xl content-center text-center m-2">
      <h2 className="mb-2 mt-2 text-2xl">{title} </h2>
      <p className="mb-2 mt-2 text-xl">{temp} °C</p>
      <p className="mt-2 text-s">{feels}</p>
      <WeatherAnimation weatherCode={code.toString()} />
    </li>
  );
}
