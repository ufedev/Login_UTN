import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'


// create(persist(funcion,opcions))

export const useStore = create(
  persist(
    // Primer parametro es el inicializador de estados
    // es una function que toma como parametro set y retorna un objeto con los getter y los setters de cada estado
    (set) => {
      return {
        token: null,// estado getter
        setToken: (new_token) => set(() => {
          return {
            token: new_token
          }
        })// Estado setter (el que modifica)
      }
    },
    // Nombre que va a tener en el localstorage
    {
      name: "web_login_token",
      storage: createJSONStorage(() => sessionStorage)
      //
    }))
