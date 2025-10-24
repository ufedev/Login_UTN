import { useState } from 'react'
import { Link } from 'react-router'
import { Form } from './Form'
import { Input } from "./Input"
import { Button } from "./Button"
import { toast } from 'react-toastify'
import { useStore } from '../store/useStore'
const Legend = () => {
  return <p>No tiene cuenta? <Link to="/register" className="underline text-sky-800" >Registrate</Link></p>
}

const Login = () => {
  const { setUser } = useStore()
  // Estados
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  // Funciones
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const body = {
        email,
        password
      }
      const url = `${import.meta.env.VITE_API_URL}/login`
      const config = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body)
      }

      const req = await fetch(url, config)
      const res = await req.json()

      if (res.error) {
        toast.error(res.msg)
        return
      }

      setUser(res.user)
      toast.success("Sesion iniciada")

    } catch {

    }
  }
  return (
    <Form title="Inciar Sesion" Legend={Legend} onSubmit={handleSubmit}>
      <Input
        type="email"
        id="email"
        name="email"
        title="Email"
        placeholder="patito@patito.com"
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Patito123"
        title="Contrasena"
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      <Button type='submit' value="Inciar Sesion" />
    </Form>
  )
}


export default Login
