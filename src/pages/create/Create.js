import { useState , useRef} from 'react'
//styles
import './Create.css'

import React from 'react'

export default function Create() {
    const [title, setTitle]=useState('')
    const [method, setMethod]=useState('')
    const [cookingTime, setCookingTime]=useState('')
    const [newIngridient, setNewIngridient]=useState('')
    const [ingridients, setIngridients]=useState([])
    const ingridientInput=useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(title, method, cookingTime, ingridients)
    }

    const handleAdd=(e)=>{
        e.preventDefault()
        const ing=newIngridient.trim()

        if(ing && !ingridients.includes(ing))
        {
            setIngridients(prevIngridients=>[...prevIngridients, newIngridient])
        }

        setNewIngridient('')
        ingridientInput.current.focus()

    }


  return (
    <div className='create'>
        <h2 className='page-title'>Add a New Recipe</h2>

        <form onSubmit={handleSubmit}>
            <label>
                <span>Recipe title:</span>
                <input
                type='text'
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
                required
                />
            </label>

            <label>
                <span>Recipe ingridients:</span>
                <div className='ingridients'>
                    <input 
                        type='text'
                        onChange={(e)=>setNewIngridient(e.target.value)}
                        value={newIngridient}
                        ref={ingridientInput}
                    />
                    <button onClick={handleAdd} className='btn'>add</button>
                </div>
            </label>
            <p>Current ingredients: {ingridients.map(i=><em key={i}>{i},</em>)}</p>
            <label>
                <span>Recipe method:</span>
                <textarea
                    onChange={(e)=>setMethod(e.target.value)}
                    value={method}
                    required

                />
            </label>
            <label>
                <span>Cooking time (minutes)</span>
                <input
                    type='number'
                    onChange={(e)=>setCookingTime(e.target.value)}
                    value={cookingTime}
                    required
                />
            </label>
            <button className='btn'>submit</button>
        </form>
    </div>
  )
}
