import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToDetailPage } from '../routes/Coordinator'
import styled from 'styled-components'
import Imagem from '../img/Header2.png'
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
flex-direction: column;
align-items: center;
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

const CardContainer = styled.div`
display: flex;
color:white;
list-style-type:none;
height: auto;
padding: 5px;
background-image: linear-gradient(92deg, #AF40FF, #5B42F3 50%, #00DDEB);
flex-direction:row;
flex-wrap:wrap;
gap: 20px;
justify-content: center;
`

const Cardzinhos = styled.div`
display: flex;
width: 300px;
height: 300px;
justify-content: space-between;
flex-direction: column;
align-items: center;
border: 5px double aqua ;
border-radius: 10px;

border-bottom-right-radius:0;
border-bottom-left-radius: 0;
img{
max-width: 180px;
max-height: 180px;
}

`
const Header2 = styled.div`
background-color: red;
width: 300px;
border-radius: 7px;
border-bottom-right-radius:0;
border-bottom-left-radius: 0;
h3{
text-align: center;
font-size: 20px;
}
`
const Footer2 = styled.div`

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
        <Footer2>
          <button onClick={() => paramns.addPokedex(pokemon.id)}>Adicionar</button>
          <button onClick={() => twoFunction(navigate, pokemon.id)}>Detalhes</button>
        </Footer2>

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

