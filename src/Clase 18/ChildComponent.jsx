import React, { useState, useContext } from 'react'
import { GlobalStates, useGlobalStates } from './Context'

const ChildComponent = () => {
  const { salario, setSalario } = useContext(GlobalStates)
  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6} </h3>
        <button
          onClick={() => setSalario(salario + 60000)}
        >Aumentar</button>
        {console.log('Se renderiza el hijo')}
    </div>
  )
}

export default ChildComponent
