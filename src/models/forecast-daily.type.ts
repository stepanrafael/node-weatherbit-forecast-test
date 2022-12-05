export type forecastDaily = {
	city: string;
	country_code: string;
	data: Array<{
		app_max_temp: number,
		app_min_temp: number,
		date: string
	}>;
}