import axios from 'axios'
import { useState, useEffect } from 'react'

const AxiosGet = () => {
    const [gatito, setGatito] = useState([])
    console.log(gatito)
    const url =  ' https://api.thecatapi.com/v1/images/search'

    useEffect(() => {
        axios(url)
        .then((res) => setGatito(res.data))
        .catch((err) => console.log(err))
    }, [])
    

  return (
    <div>
        <img src={gatito[0]?.url} alt="" />
    </div>
  )
}

export default AxiosGet