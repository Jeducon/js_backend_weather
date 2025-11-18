import { WeatherForecast } from "../models/WeatherForecast.js";

export const getForecastsService = async (city) => {
  const filter = {};
  if (city) filter.city = city;
  return WeatherForecast.find(filter).sort({ date: 1 });
};

export const createForecastService = async (data) => {
  const forecast = new WeatherForecast(data);
  return forecast.save();
};

export const updateForecastService = async (id, data) => {
  return WeatherForecast.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

export const deleteForecastService = async (id) => {
  return WeatherForecast.findByIdAndDelete(id);
};
