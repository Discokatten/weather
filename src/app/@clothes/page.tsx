import { getDaily } from "@/app/data/api";
import clothes from "@/app/data/outfits.json";
import ClothesCard from "@/app/@clothes/_components/clothescard";
import WeatherAnimation from "../components/weatheranimation";

export default async function RenderClothes() {
  const weather = await getDaily();
  const temp = Number(weather.tempArray[0].toFixed(1));
  const precipitationProb = weather.precipitationProbArray[0];
  const rainMM = weather.rainArray[0];
  const precipitationHours = weather.precipitationHourArray[0];
  const weatherCode = weather.codeArray[0];
  const precipitation = weatherCode.toString();
  let isRaining = false;
  let isSnowing = false;

  // checks if it's gonna rain or snow today
  async function isRain() {
    if (precipitationProb > 50) {
      return rainMM > 1 ? (isRaining = true) : (isSnowing = true);
    }
  }
  let points;
  // matches clothes.warmth to temperature
  async function checkPoints(): Promise<number> {
    return temp >= 20
      ? (points = 0)
      : temp >= 15
      ? (points = 1)
      : temp >= 10
      ? (points = 2)
      : temp >= 5
      ? (points = 3)
      : temp > -5
      ? (points = 4)
      : (points = 5);
  }

  // basic filtering, filters clothes based on temp and weather
  function findClothes(points: number) {
    const pointStr = points.toString();

    const found = clothes.filter((i) => i.warmth.toString().includes(pointStr));
    const rain = clothes.filter((i) => i.layer.includes("rain"));
    const snow = clothes.filter((i) => i.layer.includes("snow"));

    return isRaining ? rain : isSnowing ? snow : found;
  }

  await isRain();
  const foundClothes = findClothes(await checkPoints());

  return (
    <div className="bg-theme-800 rounded-2xl md:w-100 mb-2">
      <h2 className="text-3xl m-5">Föreslagna kläder:</h2>
      {foundClothes.map((item, i) => (
        <ClothesCard key={i} item={item.name} />
      ))}

      <ul className="bg-theme-700 border-1 border-theme-600 rounded-2xl content-center text-center p-3 m-4">
        <li>Medeltemperatur: {temp} °C</li>
        <li>Risk för nederbörd: {precipitationProb}%</li>
        <li>Under {precipitationHours} timmar</li>
        <WeatherAnimation weatherCode={precipitation} />
      </ul>
    </div>
  );
}
