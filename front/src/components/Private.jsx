import { Outlet, useNavigate } from 'react-router'
import { useStore } from '../store/useStore'
import { useEffect } from 'react'


function Private() {
  const { user, setUser } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user.token === null) {
      navigate("/")
    }

  }, [user])
  return (
    <div>
      <button onClick={
        async () => {
          setUser({
            full_name: null,
            email: null,
            token: null
          })
        }
      } className="p-1 border-[1px] bg-black text-white text-xl rounded ">Cerrar Sesion</button>
      <Outlet />
    </div>
  )
}


export default Private
