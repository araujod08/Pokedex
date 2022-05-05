import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToHomePage } from '../routes/Coordinator'
import styled from 'styled-components'
import axios from 'axios'
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
        <h2>DetailContainer</h2>
        {paramns.detailsPokemon.name &&
          <div>
            <div>{paramns.detailsPokemon.name}</div>
            <img src={paramns.detailsPokemon.sprites.other.dream_world.front_default} />
            <img src={paramns.detailsPokemon.sprites.back_default} />
            <div>Habilidades: {paramns.detailsPokemon.abilities.map((habilidade) => {
              return (
                <p>{habilidade.ability.name}</p>
              )
            })}
            </div>
            <div>
              <p>Estatística:</p>
              {paramns.detailsPokemon.stats.map((estatisticas) => {
                return (
                  <p>{estatisticas.stat.name}: {estatisticas.base_stat}</p>
                )
              })}</div>
            <div>
              <p>Tipo:</p>
              {paramns.detailsPokemon.types.map((tipos) => {
                return (
                  <p>{tipos.type.name}</p>
                )
              })}
            </div>
            <div>
              <p>Movimentos:</p>
              {paramns.detailsPokemon.moves.map((movimentos, index) => {
                return (
                  index < 4 &&
                  <p>{movimentos.move.name}</p>
                )
              })}
            </div>
          </div>
        }
      </DetailContainer>
      <FooterContainer>
        <p>@2022 - Todos os direitos reservados</p>
      </FooterContainer>
    </div>
  )
}
