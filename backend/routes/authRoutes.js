import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { User } from "../models/User.js"

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || "dev_local_secret_123"
const SALT_ROUNDS = 10

router.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" })
    }

    const existing = await User.findOne({ username })
    if (existing) {
      return res.status(409).json({ message: "User already exists" })
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

    const user = await User.create({
      username,
      passwordHash,
      role: role || "user"
    })

    res.status(201).json({
      id: user._id,
      username: user.username,
      role: user.role
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" })
    }

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const payload = { userId: user._id, username: user.username, role: user.role }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })

    res.json({ token })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
})

export default router
