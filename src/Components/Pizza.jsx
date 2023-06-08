import React from 'react'
import { useEffect } from 'react'

const Pizza = () => {

    useEffect(() => {
        console.log('Se cargó el componente')
        return () => {
            console.log('El componente fue desmontado')
        }
    }, [])

  return (
    <div>Pizza</div>
  )
}

export default Pizza