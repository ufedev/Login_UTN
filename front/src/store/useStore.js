import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Todos los hooks (ganchos) inician con `use`
// Solo se puden usar dentro de componentes
// create(persist(funcion,configuracion[objeto])) 
// const [getter,Setter]= useState()
export const useStore = create(persist(
  (set) => ({
    user: { //getter
      email: null,
      full_name: null,
      token: null
    },
    setUser: (newuser) => set({ user: newuser })//setter o modificador
  }), // <- hay una coma
  {// configuracion de persist
    name: "token_login_web"
  }
))
