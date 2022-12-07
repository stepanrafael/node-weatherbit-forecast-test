export type forecastDailyData = {
	app_max_temp: number,
	app_min_temp: number,
	avg_temp: number,
	valid_date: string
}

export type forecastDaily = {
	city: string;
	country_code: string;
	data: Array<forecastDailyData>;
}