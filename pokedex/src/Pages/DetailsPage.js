import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../routes/Coordinator'

export default function DetailsPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>DetailsPage</h1>
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToHomePage(navigate)}>Home</button>

    </div>
  )
}
