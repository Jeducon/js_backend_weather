import express from "express"
import {
  getForecasts,
  createForecast,
  updateForecast,
  deleteForecast
} from "../controllers/weatherController.js"
import { validateWeather } from "../middleware/validateWeather.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

router.get("/", getForecasts)
router.post("/", auth, validateWeather, createForecast)
router.put("/:id", auth, validateWeather, updateForecast)
router.delete("/:id", auth, deleteForecast)

export default router
