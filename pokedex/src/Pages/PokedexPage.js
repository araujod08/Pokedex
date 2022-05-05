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
    
  // const [pokemons, setPokemons] = useState([])

  // const getPokemons = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  //     .then((res) => {
  //       console.log(res)
  //       setPokemons(res.data.results)
  //     }).catch((err) => {
  //       alert("erro")
  //     })
  // }
  // useEffect(() => {
  //   getPokemons()
  // }, [])

  const paramns = useContext(Pokemon)

  const pokemonPokedex = paramns.pokedex && paramns.pokedex.map((poke) => {
    return(
    <div>
      {poke.name.toUpperCase()}
      <img src={poke.sprites.other.dream_world.front_default} />
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
      <FooterContainer>
        <p>@2022 - Todos os direitos reservados</p>
      </FooterContainer>
    </div>
  )
}

