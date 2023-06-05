import { useState, useEffect } from 'react'

const FuncComponent = () => {
  console.log('Función: Primero se renderiza ésto')
  const [user, setUser] = useState({
    name: 'Nicolas'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Funcion: Se montó el componente')

    return () => {
      console.log('Función: Se desmontó el componente')
    }
  }, [])

  useEffect(() => {
    console.log('Funcion: Se actualiza el estado user')
  }, [user])
  
  return (
    <div>
      {console.log('Función: se ejecuta el render')}
      <h1>Componente de función</h1>
      <h1>{user.name}</h1>
      <button
        onClick={() => setUser({name: 'Tadeo'})}
      >Cambiar el nombre</button>
    </div>
  )
}

export default FuncComponent