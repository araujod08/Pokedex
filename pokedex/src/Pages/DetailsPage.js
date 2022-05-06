import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../routes/Coordinator'
import styled from 'styled-components'
import Imagem from '../img/Header2.png'
import { useContext } from 'react'
import { Pokemon } from '../GlobalState/Context'

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #22262c;
img{
width: 60vw;
}
`
const SubHeader = styled.div`
display: flex;

flex-direction: row;
justify-content: space-around;
button{
font-family: 'Press Start 2P', cursive;
width: 150px;
height:50px;
padding: 10px 40px;
background-color: #008542;
color: #fff;
text-shadow: 0 2px 0 rgb(0 0 0 / 25%);
display: inline-flex;
align-items: center;
justify-content: center;
position: relative;
border: 0;
z-index: 1;
user-select: none;
cursor: pointer;
letter-spacing: 1px;
white-space: unset;
padding: .8rem 1.5rem;
text-decoration: none;
font-weight: 900;
transition: all 0.7s cubic-bezier(0,.8,.26,.99);
:before{
position: absolute;
pointer-events: none;
top: 0;
left: 0;
display: block;
width: 100%;
height: 100%;
content: '';
transition: .7s cubic-bezier(0,.8,.26,.99);
z-index: -1;
background-color: #ffcb05!important;
box-shadow: 0 -4px rgb(34 38 44 / 50%) inset, 0 4px rgb(34 38 44 / 99%) inset, -4px 0 rgb(34 38 44 / 50%) inset, 4px 0 rgb(34 38 44 / 50%) inset;
}

:after {
position: absolute;
pointer-events: none;
top: 0;
left: 0;
display: block;
width: 100%;
height: 100%;
content: '';
box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);
transition: .7s cubic-bezier(0,.8,.26,.99);
}

:hover:before {
box-shadow: 0 -4px rgb(34 38 44 / 50%) inset, 0 4px rgb(34 38 44 / 20%) inset, -4px 0 rgb(34 38 44 / 20%) inset, 4px 0 rgb(34 38 44 / 50%) inset;
}

:hover:after {
box-shadow: 0 4px 0 0 rgb(0 0 0 / 15%);

}

:active {
transform: translateY(4px);

}

:active:after {
box-shadow: 0 0px 0 0 rgb(0 0 0 / 15%);

}

}
`

const DetailContainer = styled.div`
color: white;
display: flex;
flex-direction: column;

`
const SubDetail = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`
const CardPokemon = styled.div`
display: flex;
width: 400px;
height: 800px;
justify-content: space-around;
flex-direction: column;
align-items: center;
border: 5px double #dedede ;
border-radius: 10px;
img{
width: 350px;
}

`
const Habilidades = styled.div`
display: flex;
width: 250px;
justify-content: space-between;
flex-direction: column;
align-items: center;
border: 5px double #dedede ;
border-radius: 10px;
height: 100px;
text-align: center;


`
const Tipos= styled.div`
display: flex;
width: 250px;
justify-content: space-between;
flex-direction: column;
align-items: center;
border: 5px double #dedede ;
border-radius: 10px;
height: 125px;
`
const Movimentos = styled.div`
display: flex;
width: 250px;
justify-content: space-between;
flex-direction: column;
align-items: center;
border: 5px double #dedede ;
border-radius: 10px;

`


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
