import { useState, useEffect } from 'react'

const FetchApi = () => {
    const [perrito, setPerrito] = useState({})
    const [counter, setCounter] = useState(0)
    const [boton, setBoton] = useState(true)
    const url = 'https://dog.ceo/api/breeds/image/random'
    console.log(perrito)

    useEffect(() => {
        fetchDog()
    }, [counter, boton]) //Cada vez que cambia alguno de los dos estados va a volver a hacer el fetch

    const fetchDog = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setPerrito(data)
            console.log(data)
        })
        .catch((err) => console.log(err))
    }

  return (
    <div>
        <img src={perrito.message} alt="" />
        <button
            onClick={() => setCounter(counter + 1)}
        >Cambiar el perrito 1</button>
        <button
            onClick={() => setBoton(!boton)}
        >Cambiar el perrito 2</button>
        <button 
            onClick={() => fetchDog()}
        >Cambiar el perrito 3</button>
        <h4>Cantidad de veces que se clickeó el boton: {counter}</h4>
    </div>
  )
}

export default FetchApi