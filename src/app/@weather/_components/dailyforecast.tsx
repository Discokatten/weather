import getWeather from '@/app/data/weatherApi'
import WeatherCard from '@/app/@weather/_components/WeatherCard'
export default async function DailyForecast() {
  const weather = await getWeather()
  const forecast = weather.daily

  const time = weather.daily.time.map((time) => {
    const date = new Date(time)
    const weekday = date.toLocaleString('sv-SE', { weekday: 'long' })
    return weekday.charAt(0).toUpperCase() + weekday.slice(1)
  })

  const tempArray = Array.from(forecast.temperature_2m_mean!)
  const codeArray = Array.from(forecast.weather_code!)

  return (
    <ul className="h-72 flex justify-between wrap md:w-250 content-center">
      {tempArray.map((temp, index) => (
        <WeatherCard key={index} day={time[index]} temp={temp.toFixed(1)} code={codeArray[index]} />
      ))}
    </ul>
  )
}
