import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../../routes/Coordinator'
import Imagem from '../../img/Header2.png'
import { Pokemon } from '../../GlobalState/Context'
import { HeaderContainer, SubHeader, DetailContainer, SubDetail, CardPokemon, Habilidades, Tipos, Movimentos } from './Styled'

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
              <div>{paramns.detailsPokemon.name}</div>
              <img src={paramns.detailsPokemon.sprites.other.dream_world.front_default} />
              <img src={paramns.detailsPokemon.sprites.back_default} />
            </CardPokemon>
            <Habilidades>
              <div>Habilidades: {paramns.detailsPokemon.abilities.map((habilidade) => {
                return (
                  <p>{habilidade.ability.name}</p>
                )
              })}
              </div>
            </Habilidades>
            <Tipos>
              <div>
                <p>Tipo:</p>
                {paramns.detailsPokemon.types.map((tipos) => {
                  return (
                    <p>{tipos.type.name}</p>
                  )
                })}
              </div>
            </Tipos>
            <Movimentos>
              <div>
                <p>Movimentos:</p>
                {paramns.detailsPokemon.moves.map((movimentos, index) => {
                  return (
                    index < 4 &&
                    <p>{movimentos.move.name}</p>
                  )
                })}
              </div>
            </Movimentos>
          </SubDetail>
        }
      </DetailContainer>
    </div>
  )
}
