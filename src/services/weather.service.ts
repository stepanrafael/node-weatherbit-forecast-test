import fetch from 'node-fetch';
import { WeatherServiceInterface } from '../models/weather-service.interface';
import { Error } from '../models/error.type';
import { forecastDaily, forecastDailyData } from '../models/forecast-daily.type';

export default class WeatherService implements WeatherServiceInterface{
	getForecastDaily(city: string, country_code: string): Promise<forecastDaily | Error> {
		return new Promise(async (resolve, reject) => {
			try {
				let api = process.env.WEATHERBIT_HOST + "forecast/daily?city="+city+"&country="+country_code+"&key=" + process.env.WEATHERBIT_API_KEY;
			    let response = await fetch(api);
			    let json = await response.json();
				
				let result: forecastDaily = { city, country_code, "data": [] };

				json.data.forEach((item: forecastDailyData) => {
					result.data.push({
						"app_max_temp": item.app_max_temp,
						"app_min_temp": item.app_min_temp,
						"avg_temp": Number(((item.app_max_temp + item.app_min_temp) / 2).toFixed(2)),
						"valid_date": item.valid_date
					});
				});

				resolve(result);
			} catch(err) {
				reject({"message": err});
			}
		});
	}
};