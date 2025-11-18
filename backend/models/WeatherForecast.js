import mongoose from "mongoose";

const daySchema = new mongoose.Schema(
  {
    day: String,
    temp: Number,
    desc: String,
    icon: String
  },
  { _id: false }
);

const cityWeatherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    temp: Number,
    feels: Number,
    humidity: Number,
    wind: Number,
    pressure: Number,
    desc: String,
    icon: String,
    forecast7: [daySchema]
  },
  { versionKey: false }
);

export const WeatherForecast = mongoose.model(
  "WeatherForecast",
  cityWeatherSchema
);

