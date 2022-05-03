import React from 'react'
import { useNavigate } from 'react-router-dom'
import {goToPokedexPage} from '../routes/Coordinator'
import styled from 'styled-components'


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
  return (
      <div>
      <HeaderContainer>
        <h1>POKEDEX</h1>
        
      </HeaderContainer>
      <SubHeader>
          <button onClick={()=>goToPokedexPage(navigate)}>Pokedex</button>
        </SubHeader>
      <HomeContainer>
      <h2>HomePage</h2>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
      <p>CONTEUDO</p>
       </HomeContainer>
       <FooterContainer>
       <p>@2022 - Todos os direitos reservados</p>
       </FooterContainer>
    </div>
  )
}
