import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// username: admin
// password: 1234
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "1234") {
    return res.status(401).json({ message: "Bad credentials" });
  }

  const payload = { username: "admin", role: "admin" };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

export default router;
