import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const {search} = useRecipeStates()

    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=10`;
    // 
    useEffect(() => {
        axios(url)
        .then(res => setRecipes(res.data.searchResults[0].results))
    }, [url])
    console.log(recipes)
  return (
    <div>
        {recipes.map((recipe) => (
            <Link to={'/detalle/' + recipe.id} key={recipe.id}>
                <li>{recipe.name}</li>
            </Link>
        ))}
    </div>
  )
}

export default Recipes