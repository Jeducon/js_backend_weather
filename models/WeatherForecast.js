import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema(
  {
    city: { type: String, required: true, minlength: 2, trim: true },
    date: { type: Date, required: true },
    temp: { type: Number, required: true },
    feelsLike: { type: Number },
    description: { type: String, default: "" },
    humidity: { type: Number, min: 0, max: 100 },
    windSpeed: { type: Number, min: 0 }
  },
  { versionKey: false }
);

export const WeatherForecast = mongoose.model("WeatherForecast", weatherSchema);
