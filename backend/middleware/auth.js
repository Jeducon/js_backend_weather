import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header)
    return res.status(401).json({ message: "No authorization header" });

  const [type, token] = header.split(" ");
  if (type !== "Bearer" || !token)
    return res.status(401).json({ message: "Invalid auth format" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
