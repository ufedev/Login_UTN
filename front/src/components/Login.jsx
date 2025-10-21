import { useState } from 'react'
import { Link } from 'react-router'
import { Form } from './Form'
import { Input } from "./Input"
import { Button } from "./Button"

const Legend = () => {
  return <p>No tiene cuenta? <Link to="/register" className="underline text-sky-800" >Registrate</Link></p>
}

const Login = () => {

  // Estados
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Funciones
  const handleSubmit = async (e) => {
    e.preventDefault()
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
