import React from 'react'

//styles
import './Home.css'

//components
import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'

export default function Home() {

    const {data, isPending, error}=useFetch('http://localhost:3004/recipes')

  return (
    <div className='home'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data}/>}
    </div>
  )
}
