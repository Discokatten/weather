import { fetchWeatherApi } from "openmeteo";
export default async function getWeather() {
  const params = {
    latitude: 59.3294,
    longitude: 18.0687,
    daily: ["temperature_2m_mean", "weather_code"],
    hourly: [
      "temperature_2m",
      "apparent_temperature",
      "weather_code",
      "wind_speed_10m",
      "snowfall",
      "rain",
    ],
    current: [
      "precipitation",
      "temperature_2m",
      "relative_humidity_2m",
      "weather_code",
      "wind_speed_10m",
      "apparent_temperature",
    ],
    timezone: "Europe/Berlin",
    temporal_resolution: "hourly_1",
    wind_speed_unit: "ms",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);
  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const latitude = response.latitude();
  const longitude = response.longitude();
  const elevation = response.elevation();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const utcOffsetSeconds = response.utcOffsetSeconds();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      precipitation: current.variables(0)!.value().toFixed(),
      temperature_2m: current.variables(1)!.value().toFixed(),
      relative_humidity_2m: current.variables(2)!.value().toFixed(),
      weather_code: current.variables(3)!.value().toFixed(),
      wind_speed_10m: current.variables(4)!.value().toFixed(),
      apparent_temperature: current.variables(5)!.value().toFixed(),
    },
    hourly: {
      time: [
        ...Array(
          (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      temperature_2m: hourly.variables(0)!.valuesArray(),
      apparent_temperature: hourly.variables(1)!.valuesArray(),
      weather_code: hourly.variables(2)!.valuesArray(),
      wind_speed_10m: hourly.variables(3)!.valuesArray(),
      snowfall: hourly.variables(4)!.valuesArray(),
      rain: hourly.variables(5)!.valuesArray(),
    },
    daily: {
      time: [
        ...Array(
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      temperature_2m_mean: daily.variables(0)!.valuesArray(),
      weather_code: daily.variables(1)!.valuesArray(),
    },
  };

  return weatherData;
}
