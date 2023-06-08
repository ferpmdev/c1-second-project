import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Pizza from './Pizza'

const Pedidos = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)
    }, [])

  return (
    <div>
        <h2>Su pedido:</h2>
        {show && <Pizza/>}
        <button
            onClick={() => setShow(false)}
        >Cancelar pedido</button>
    </div>
  )
}

export default Pedidos