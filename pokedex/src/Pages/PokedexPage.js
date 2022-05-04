import React from 'react'
import { goBack, goToDetailPage } from '../routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Imagem from '../img/Header2.png'

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
`

const PokedexContainer = styled.div`
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


export default function PokedexPage() {
  const navigate = useNavigate()
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
      </PokedexContainer>
      <FooterContainer>
        <p>@2022 - Todos os direitos reservados</p>
      </FooterContainer>
    </div>
  )
}

