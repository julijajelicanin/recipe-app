import { Link } from 'react-router-dom'

//styles
import './NavBar.css'

import React from 'react'

export default function NavBar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>
                <h1>Cooking with Julija</h1>
            </Link>
            <Link to='/create'>
                Create Recipe
            </Link>
        </nav>
    </div>
  )
}
