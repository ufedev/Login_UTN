import { BrowserRouter, Routes, Route } from 'react-router'
import Public from "./components/Public"
import Private from './components/Private'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from "react-toastify"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Public />} path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<Private />} path="/private">
          <Route index element={<h1>Rutas privadas</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>)
}


export default App
