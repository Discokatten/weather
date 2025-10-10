// import { fetchWeatherApi } from "openmeteo";
// export default async function getWeather() {
//   const params = {
//     latitude: 59.3294,
//     longitude: 18.0687,
//     daily: [
//       "weather_code",
//       "temperature_2m_max",
//       "temperature_2m_min",
//       "uv_index_max",
//     ],
//     hourly: [
//       "temperature_2m",
//       "apparent_temperature",
//       "weather_code",
//       "rain",
//       "snowfall",
//       "wind_speed_10m",
//     ],
//     current: [
//       "temperature_2m",
//       "relative_humidity_2m",
//       "apparent_temperature",
//       "weather_code",
//       "wind_speed_10m",
//       "precipitation",
//     ],
//     timezone: "Europe/Berlin",
//     temporal_resolution: "hourly_1",
//     wind_speed_unit:"ms"
//   };
//   const url = "https://api.open-meteo.com/v1/forecast";
//   const responses = await fetchWeatherApi(url, params);
//   // Process first location. Add a for-loop for multiple locations or weather models
//   const response = responses[0];

//   // Attributes for timezone and location
//   const latitude = response.latitude();
//   const longitude = response.longitude();
//   const elevation = response.elevation();
//   const timezone = response.timezone();
//   const timezoneAbbreviation = response.timezoneAbbreviation();
//   const utcOffsetSeconds = response.utcOffsetSeconds();

//   const current = response.current()!;
//   const hourly = response.hourly()!;
//   const daily = response.daily()!;

//   // Note: The order of weather variables in the URL query and the indices below need to match!
//   const weatherData = {
//     current: {
//       time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
//       temperature_2m: current.variables(0)!.value().toFixed(3),
//       relative_humidity_2m: current.variables(1)!.value().toFixed(3),
//       apparent_temperature: current.variables(2)!.value().toFixed(3),
//       weather_code: current.variables(3)!.value(),
//       wind_speed_10m: current.variables(4)!.value().toFixed(3),
//       precipitation: current.variables(5)!.value().toFixed(3),
//     },
//     hourly: {
//       time: [
//         ...Array(
//           (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
//         ),
//       ].map(
//         (_, i) =>
//           new Date(
//             (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
//               1000
//           )
//       ),
//       temperature_2m: hourly.variables(0)!.valuesArray(),
//       apparent_temperature: hourly.variables(1)!.valuesArray(),
//       weather_code: hourly.variables(2)!.valuesArray(),
//       rain: hourly.variables(3)!.valuesArray(),
//       snowfall: hourly.variables(4)!.valuesArray(),
//       wind_speed_10m: hourly.variables(5)!.valuesArray(),
//     },
//     daily: {
//       time: [
//         ...Array(
//           (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
//         ),
//       ].map(
//         (_, i) =>
//           new Date(
//             (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
//               1000
//           )
//       ),
//       weather_code: daily.variables(0)!.valuesArray(),
//       temperature_2m_max: daily.variables(1)!.valuesArray(),
//       temperature_2m_min: daily.variables(2)!.valuesArray(),
//       uv_index_max: daily.variables(3)!.valuesArray(),
//     },
//   };

//   // 'weatherData' now contains a simple structure with arrays with datetime and weather data
//   //   console.log(
//   //     `\nCurrent time: ${weatherData.current.time}`,
//   //     `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
//   //     `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
//   //     `\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
//   //     `\nCurrent weather_code: ${weatherData.current.weather_code}`
//   //   )
//   //   console.log("\nHourly data", weatherData.hourly);
//   //   console.log("\nDaily data", weatherData.daily);

//   return weatherData;
// }
