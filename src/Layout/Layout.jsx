import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <h2>Esto es el layout</h2>
        <Outlet/> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
    </div>
  )
}

export default Layout