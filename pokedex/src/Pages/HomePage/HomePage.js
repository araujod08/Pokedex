import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToDetailPage } from '../../routes/Coordinator'
import Imagem from '../../img/Header2.png'
import { Pokemon } from '../../GlobalState/Context'
import { HeaderContainer, SubHeader, CardContainer, Cardzinhos, Header2, FooterCard } from './Styled'

export default function HomePage() {
  const navigate = useNavigate()

  const paramns = useContext(Pokemon)

  const twoFunction = (navigate, id) => {
    paramns.getPokemonDetailFunction(id)
    goToDetailPage(navigate)
  }

  const listPokemons = paramns.detail && paramns.detail.map((pokemon) => {
    return (
      <Cardzinhos key={pokemon.id}>
        <Header2>
          <h3>{pokemon.name.toUpperCase()}</h3>
        </Header2>
        <img src={pokemon.sprites.other.dream_world.front_default} />
        <FooterCard>
          <button onClick={() => paramns.addPokedex(pokemon.id)}>Adicionar</button>
          <button onClick={() => twoFunction(navigate, pokemon.id)}>Detalhes</button>
        </FooterCard>
      </Cardzinhos>
    )
  })

  return (
    <div>
      <HeaderContainer>
        <img src={Imagem} />
      </HeaderContainer>
      <SubHeader>
        <button onClick={() => goToPokedexPage(navigate)}>Pokédex</button>
      </SubHeader>
      <CardContainer>
        {listPokemons}
      </CardContainer>
    </div>
  )
}

