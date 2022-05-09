import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../../routes/Coordinator'
import Imagem from '../../img/Header2.png'
import { Pokemon } from '../../GlobalState/Context'
import { HeaderContainer, SubHeader, DetailContainer, SubDetail, CardPokemon, Habilidades, Tipos, Movimentos, Div, Header2 } from './Styled'

export default function DetailsPage() {
  const navigate = useNavigate()

  const paramns = useContext(Pokemon)
  return (
    <div>
      <HeaderContainer>
        <img src={Imagem} />
      </HeaderContainer>
      <SubHeader>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToHomePage(navigate)}>Home</button>
      </SubHeader>
      <DetailContainer>
        {paramns.detailsPokemon.name &&
          <SubDetail>
            <CardPokemon>
              <Header2><h3>{paramns.detailsPokemon.name.toUpperCase()}</h3></Header2>
              <img src={paramns.detailsPokemon.sprites.other.dream_world.front_default} />
              <img src={paramns.detailsPokemon.sprites.back_default} />
            </CardPokemon>
            <Div>
              <Tipos>
                <Header2>Type:</Header2> {paramns.detailsPokemon.types.map((tipos) => {
                  return (
                    <p><li>{tipos.type.name}</li></p>
                  )
                })}
              </Tipos>
              <Habilidades>
                <Header2><h1>Abilities:</h1></Header2> {paramns.detailsPokemon.abilities.map((habilidade) => {
                  return (
                    <p><li>{habilidade.ability.name}</li></p>
                  )
                })}
              </Habilidades>
              <Movimentos>
                <Header2>Moves:</Header2> {paramns.detailsPokemon.moves.map((movimentos, index) => {
                  return (
                    index < 4 &&
                    <p><li>{movimentos.move.name}</li></p>
                  )
                })}
              </Movimentos>
            </Div>
          </SubDetail>
        }
      </DetailContainer>
    </div>
  )
}
