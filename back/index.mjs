import express from "express"
import "dotenv/config"
import cors from "cors"
import { sequelize } from './config/db.mjs'
import './config/db.mjs'
import { routes } from "./routes/user.mjs"
const PORT = process.argv[2] ?? 3000
const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ alter: true })
    console.log("Bases de datos conectada")
    console.log(`servidor corriendo en http://localhost:${PORT}`)
  } catch {
    console.log("Hubo un error en la conexion a la base de datos")
  }

})
