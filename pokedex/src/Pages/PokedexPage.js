import React from 'react'
import { goBack, goToDetailPage } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'


export default function PokedexPage() {
 const navigate = useNavigate()
  return (
    <div>
    <h1>PokedexPage</h1>
    <button onClick={()=>goBack(navigate)}>Voltar</button>
    <button onClick={()=>goToDetailPage(navigate)}>Detalhes</button>
    </div>


  )
}
