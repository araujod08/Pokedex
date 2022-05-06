import React, { useContext } from 'react'
import { goBack } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import Imagem from '../img/Header2.png'
import { Pokemon } from '../GlobalState/Context'
import { HeaderContainer, SubHeader, PokedexContainer, CardInterno, Header3 } from './Styled'

export default function PokedexPage() {
  const navigate = useNavigate()

  const paramns = useContext(Pokemon)

  const pokemonPokedex = paramns.pokedex && paramns.pokedex.map((poke) => {
    return (
      <CardInterno key={poke.id}>
        <Header3>
          <h3>{poke.name.toUpperCase()}</h3>
        </Header3>
        <img src={poke.sprites.other.dream_world.front_default} />
        <button onClick={() => paramns.removePokemon(poke.id)}>Remover</button>
      </CardInterno>
    )
  })

  return (
    <div>
      <HeaderContainer>
        <img src={Imagem} />
      </HeaderContainer>
      <SubHeader>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </SubHeader>
      <PokedexContainer>
        {pokemonPokedex}
      </PokedexContainer>
    </div>
  )
}

