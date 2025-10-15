export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly[];
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  apparent_temperature: string;
  rain: string;
  precipitation: string;
  precipitation_probability: string;
  snowfall: string;
  showers: string;
}
export interface Hourly {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  rain: number[];
  precipitation: number[];
  precipitation_probability: number[];
  snowfall: number[];
}
