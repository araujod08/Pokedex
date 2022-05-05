import React, { useContext } from 'react'
import { goBack, goToDetailPage } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Imagem from '../img/Header2.png'
import { Pokemon } from '../GlobalState/Context'

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #22262c;
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
background-color: yellow;
flex-direction: row;
justify-content: space-around;
button{
width: 150px;
height:50px;
padding: 10px 40px;
font-size: 18px;
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
text-transform: uppercase;
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
background-color: #008542!important;
box-shadow: 0 -4px rgb(21 108 0 / 50%) inset, 0 4px rgb(100 253 31 / 99%) inset, -4px 0 rgb(100 253 31 / 50%) inset, 4px 0 rgb(21 108 0 / 50%) inset;
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
box-shadow: 0 -4px rgb(0 0 0 / 50%) inset, 0 4px rgb(255 255 255 / 20%) inset, -4px 0 rgb(255 255 255 / 20%) inset, 4px 0 rgb(0 0 0 / 50%) inset;
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

const PokedexContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
color: white;
`

export default function PokedexPage() {
  const navigate = useNavigate()

  const paramns = useContext(Pokemon)

  const pokemonPokedex = paramns.pokedex && paramns.pokedex.map((poke) => {
    return (
      <div key={poke.id}>
        {poke.name.toUpperCase()}
        <img src={poke.sprites.other.dream_world.front_default} />
        <button onClick={() => paramns.removePokemon(poke.id)}>X</button>
      </div>
    )
  })

  return (
    <div>
      <HeaderContainer>
        <img src={Imagem} />
      </HeaderContainer>
      <SubHeader>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToDetailPage(navigate)}>Detalhes</button>
      </SubHeader>
      <PokedexContainer>
        {pokemonPokedex}
      </PokedexContainer>
    </div>
  )
}

