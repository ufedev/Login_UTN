import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'

const Public = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-sky-300 to-fuchsia-400">
      <Outlet />
    </div>
  )
}


export default Public
