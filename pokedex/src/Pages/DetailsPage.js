import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../routes/Coordinator'
import styled from 'styled-components'
import axios from 'axios'
import Imagem from '../img/Header2.png'

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
background-color: yellow;
flex-direction: row;
justify-content: space-around;
`

const DetailContainer = styled.div`
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


export default function DetailsPage() {
  const navigate = useNavigate()

  const [pokemons, setPokemons] = useState([])
  const [detail, setDetail] = useState([])

  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => {
        console.log(res)
        setPokemons(res.data.results)
      }).catch((err) => {
        alert("erro")
      })
  }
  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    const newPokemons = []
    pokemons && pokemons.forEach((poke) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((response) => {
          newPokemons.push(response.data)
          if (newPokemons.length === 20) {
            setDetail(newPokemons)
          }
        }).catch((error) => {
          alert("A página não foi carregada por favor, tente novamente.")
        })
    })
  }, [pokemons])

  const listPokemons = detail && detail.map((pokemon) => {
    return (
      <div key={pokemon.id} pokemon={pokemon}>
        <div>{pokemon.name.toUpperCase()}</div>
        <img src={pokemon.sprites.other.dream_world.front_default} />
        <img src={pokemon.sprites.back_default} />
        <div>Habilidades: {pokemon.abilities.map((habilidade) => {
          return (
            <p>{habilidade.ability.name}</p>
          )
        })}</div>
        <div>
          <p>Estatística:</p>
          {pokemon.stats.map((estatisticas) => {
            return (
              <p>{estatisticas.stat.name}: {estatisticas.base_stat}</p>
            )
          })}</div>
          <div>
            <p>Tipo:</p>
            {pokemon.types.map((tipos)=>{
              return(
                <p>{tipos.type.name}</p>
              )
            })}
          </div>
          <div>
            <p>Movimentos:</p>
            {pokemon.moves.map((movimentos, index)=>{
              return(
                index < 4 && 
                <p>{movimentos.move.name}</p>
              )
            })}
          </div>
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
        <button onClick={() => goToHomePage(navigate)}>Home</button>
      </SubHeader>
      <DetailContainer>
        <h2>DetailContainer</h2>
        {listPokemons}
      </DetailContainer>
      <FooterContainer>
        <p>@2022 - Todos os direitos reservados</p>
      </FooterContainer>
    </div>
  )
}
