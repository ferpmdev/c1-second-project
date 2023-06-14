import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [detail, setDetail] = useState({})
    const params = useParams()
    console.log(params)
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`
    // const url = `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}`

    useEffect(() => {
        axios(url)
        .then(res => setDetail(res.data))
    }, [])

    console.log(detail)
  return (
    <div>
        Detail n° {params.id}
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
        <p>Ingredientes: </p>
        {detail.extendedIngredients?.map((ingredients) => <li key={ingredients.id}>{ingredients.name}</li>)}
    </div>
  )
}

export default Detail