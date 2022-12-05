import { Error } from './error.type';
import { forecastDaily } from './forecast-daily.type';

export interface WeatherServiceInterface {
	getForecastDaily: (city: string, country_code: string) => Promise<forecastDaily | Error>;
}