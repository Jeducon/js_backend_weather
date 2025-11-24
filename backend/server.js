import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./services/db.js"
import weatherRoutes from "./routes/weatherRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/weather", weatherRoutes)

connectDB(process.env.MONGO_URI)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("Server running on", PORT))
