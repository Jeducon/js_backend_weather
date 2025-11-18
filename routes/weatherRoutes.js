import express from "express";
import {
  getForecasts,
  createForecast,
  updateForecast,
  deleteForecast
} from "../controllers/weatherController.js";
import { validateWeather } from "../middleware/validateWeather.js";

const router = express.Router();

router.get("/", getForecasts);
router.post("/", validateWeather, createForecast);
router.put("/:id", validateWeather, updateForecast);
router.delete("/:id", deleteForecast);

export default router;
