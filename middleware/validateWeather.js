export const validateWeather = (req, res, next) => {
  const { city, date, temp, humidity, windSpeed } = req.body;

  if (!city || typeof city !== "string" || city.trim().length < 2) {
    return res.status(400).json({ message: "Invalid city" });
  }

  if (!date || isNaN(new Date(date).getTime())) {
    return res.status(400).json({ message: "Invalid date" });
  }

  if (temp === undefined || typeof temp !== "number") {
    return res.status(400).json({ message: "Invalid temperature" });
  }

  if (humidity !== undefined && (typeof humidity !== "number" || humidity < 0 || humidity > 100)) {
    return res.status(400).json({ message: "Invalid humidity" });
  }

  if (windSpeed !== undefined && (typeof windSpeed !== "number" || windSpeed < 0)) {
    return res.status(400).json({ message: "Invalid wind speed" });
  }

  next();
};
