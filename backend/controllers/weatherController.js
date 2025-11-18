import {
  getForecastsService,
  createForecastService,
  updateForecastService,
  deleteForecastService
} from "../services/weatherService.js";

export const getForecasts = async (req, res) => {
  try {
    const forecasts = await getForecastsService(req.query.city);
    res.json(forecasts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createForecast = async (req, res) => {
  try {
    const forecast = await createForecastService(req.body);
    res.status(201).json(forecast);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateForecast = async (req, res) => {
  try {
    const updated = await updateForecastService(req.params.id, req.body);
    if (!updated)
      return res.status(404).json({ message: "Forecast not found" });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const deleteForecast = async (req, res) => {
  try {
    const deleted = await deleteForecastService(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Forecast not found" });
    res.json({ message: "Forecast deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

