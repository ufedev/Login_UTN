import { Router } from "express"
import { User } from '../models/User.mjs'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const routes = Router()


routes.get("/", async (req, res) => {


  const users = await User.findAll()

  res.json({
    error: false,
    users
  })

})

routes.post("/", async (req, res) => {
  const body = req.body

  try {
    const { fullName, email, password, confirmPassword } = body
    if (password !== confirmPassword) {
      res.status(403).json({
        error: true,
        msg: "Las contrase~nas no coinciden"
      })
      return
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const activateToken = "123"
    const user = new User({
      fullName,
      email,
      hash,
      activateToken
    })


    await user.save()
    res.json({
      error: false,
      msg: "Usuario creado"
    })

  } catch (err) {
    res.status(400).json({
      error: true,
      msg: err.message
    })
  }

})

// LOGIN
routes.post("/login", async (req, res) => {
  try {
    const body = req.body
    const { email, password } = body

    const user = await User.findOne({
      where: {
        email: email
      }
    })

    if (!user) {
      res.status(404).json({
        error: true,
        msg: "El usuario no existe"
      })
      return
    }

    const checkPasswd = await bcrypt.compare(password, user.hash)

    if (!checkPasswd) {
      res.status(403).json({
        error: true,
        msg: "Password incorrecto"
      })
      return
    }

    const payload = {
      email: email
    }

    const token = jwt.sign(payload, process.env.SECRET)

    res.json({
      error: false,
      user: {
        full_name: user.fullName,
        email: user.email,
        token: `Bearer ${token}`
      }
    })
  } catch {
    res.status(500).json({
      error: true,
      msg: "Hubo un error al iniciar sesion"
    })
  }



})




routes.get("/verify-token", async (req, res) => {

  const headers = req.headers
  const auth = headers.authorization
  // Bearer LKJFLKJFUDOSIJLKLKFJDSLK
  const token = auth.split(" ")[1]

  const verify = jwt.verify(token, process.env.SECRET)

  console.log(verify)

  if (!verify) {
    res.json({ error: true })
    return
  }

  res.json({
    error: false
  })

})
