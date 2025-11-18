export const validateWeather = (req, res, next) => {
  const { name, temp, forecast7 } = req.body;

  if (!name || typeof name !== "string" || name.trim().length < 2)
    return res.status(400).json({ message: "Invalid city name" });

  if (temp !== undefined && typeof temp !== "number")
    return res.status(400).json({ message: "Invalid temp" });

  if (forecast7 && !Array.isArray(forecast7))
    return res.status(400).json({ message: "forecast7 must be array" });

  next();
};
