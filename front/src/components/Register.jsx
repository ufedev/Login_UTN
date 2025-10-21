import { useState } from 'react'
import { Form } from './Form'
import { Input } from './Input'
import { Button } from "./Button"
import { Link } from 'react-router'
import { toast } from "react-toastify"

const Legend = () => {
  return <p>Ya tiene cuenta? <Link to="/" className='underline text-sky-800'>Inicia Sesion</Link></p>
}


const Register = () => {
  // Estados del componente
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Funciones 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const url = `http://localhost:3001/`
      const body = {
        fullName,
        email,
        password,
        confirmPassword
      }

      const req = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(body)
      })

      const res = await req.json()

      if (res.error) {
        toast.error(res.msg)
        return
      }

      toast.success(res.msg)
      setFullName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")

    } catch {

    }
    finally {
      setLoading(false)
    }
  }



  return (
    <Form title="Registrarse" Legend={Legend} onSubmit={handleSubmit}>
      <Input
        name="Fullname"
        type="text"
        id="fullname"
        title="Nombre completo"
        placeholder="Joe Doe"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        name="email"
        type="email"
        title="Correo"
        placeholder="correo@correo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        name="Password"
        title="Contrasena"
        placeholder="Patito123"
        value={password}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        title="Confirmar Contrasena"
        placeholder="Patito123"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button type='submit' value={`${loading ? "Cargando..." : "Registrase"}`} />
    </Form>)
}


export default Register
