import WeatherAnimation from "@/app/components/weatheranimation";

export default function WeatherIcon({ icon }: { icon: string }) {
  return icon === "rain" ? (
    <WeatherAnimation weatherCodeProps={"umbrella"} />
  ) : (
    <WeatherAnimation weatherCodeProps={"snowflake"} />
  );
}
