import { getDaily } from "@/app/data/api";
import clothes from "@/app/data/outfits.json";
import ClothesCard from "@/app/@clothes/_components/clothescard";
import WeatherIcon from "@/app/@clothes/_components/weathericon";

export default async function RenderClothes() {
  const weather = await getDaily();
  const temp = Number(weather.tempArray[0].toFixed(1));
  const precipitationProb = weather.precipitationProbArray[0];
  const rainMM = weather.rainArray[0];
  const precipitationHours = weather.precipitationHourArray[0];


  // checks if it's gonna rain or snow today
  let precipitation = "";
  async function isRain() {
    if (precipitationProb > 50) {
      return rainMM > 1 ? (precipitation = "rain") : (precipitation = "snow");
    }
    return;
  } 
  // matches clothes.warmth to temperature
  async function checkPoints() {
    let points;
    return temp >= 20
      ? (points = 0)
      : temp >= 15
      ? (points = 1)
      : temp >= 10
      ? (points = 2)
      : temp >= 5
      ? (points = 3)
      : (points = 4);
  }

  // basic filtering, filters clothes based on temp and weather
  function findClothes(points: string, precipitation: string) {
    const found = clothes.filter((i) => i.warmth.toString().includes(points));
    const rain = found.filter((i) => i.layer.includes("rain"));
    const snow = found.filter((i) => i.layer.includes("snow"));

    return precipitation === "rain"
      ? rain
      : precipitation === "snow"
      ? snow
      : found;
  }

  await isRain();
  const points = (await checkPoints()).toString();
  const foundClothes = findClothes(points!, precipitation);

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
        <WeatherIcon icon={precipitation} />
      </ul>
    </div>
  );
}
