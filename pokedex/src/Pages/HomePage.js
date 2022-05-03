import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage } from '../routes/Coordinator'
import styled from 'styled-components'
import axios from 'axios'


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #22262c;

`
const SubHeader = styled.div`
display: flex;
background-color: yellow;
flex-direction: column;
align-items: center;
`
const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
color: white;
`
const FooterContainer = styled.div`
  background-color: #0e141b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`


export default function HomePage() {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState([])
  const getPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        console.log(response)
        setPokemon(response.data.results)
      })
      .catch((error) => {
        alert("esta dando erro")
      })
  }
  useEffect(() => {
    getPokemon()
  },[])

  const listPokemon = pokemon.map((list) => {
    return (
      <div key={list.name}list={pokemon}>
        <p>{list.name}</p>
        
      </div>
    )
  })
  return (
    <div>
      <HeaderContainer>
        <h1>POKEDEX</h1>
      </HeaderContainer>
      <SubHeader>
        <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
      </SubHeader>
      <HomeContainer>
        <h2>HomePage</h2>
        {listPokemon}
      </HomeContainer>
      <FooterContainer>
        <p>@2022 - Todos os direitos reservados</p>
      </FooterContainer>
    </div>
  )
}

