import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToPokedexPage} from '../routes/Coordinator'



export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>HomePage</h1>
       <button onClick={()=>goToPokedexPage(navigate)}>Pokedex</button>
    </div>
  )
}
