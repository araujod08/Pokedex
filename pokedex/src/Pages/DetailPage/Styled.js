import styled from "styled-components"

export const HeaderContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color: #22262c;
img{
width: 60vw;
}
`
export const SubHeader = styled.div`
display: flex;
justify-content: center;
gap: 20px;
margin-bottom: 10px;
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

export const DetailContainer = styled.div`
display: flex;
justify-content: space-around;
color:#dedede;
`

export const SubDetail = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;

`

export const Header2 = styled.div`
background-color: #dc0a2d;
border-radius: 7px;
border-bottom-right-radius:0;
border-bottom-left-radius: 0;
margin-bottom: 20px;
h3{
text-align: center;
font-size: 15px;
width: 150px;
}
`

export const CardPokemon = styled.div`
display: flex;
flex-direction: column;
width: 240px;
height:auto;
border: 5px double #dedede;
border-radius: 10px;
align-items: center;
img{
max-width: 190px;
max-height: 190px;
margin-bottom:50px;
margin-top: 50px;
}
`

export const Habilidades = styled.div`
display: flex;
border: 5px double #dedede ;
border-radius: 10px;
width: 290px;
height: 190px;
flex-direction: column;
text-align: center;
p{
font-size: 20px;
list-style-type: none;
}
h1{
font-size: 12px;
}
`

export const Tipos = styled.div`
display: flex;
flex-direction: column;
border: 5px double #dedede ;
border-radius: 10px;
text-align: center;
width: 290px;
height: 190px;
list-style-type: none;
p{
font-size: 20px;
list-style-type: none;

}
`

export const Movimentos = styled.div`
display: flex;
width: auto;
text-align: center;
flex-direction: column;
border: 5px double #dedede ;
border-radius: 10px;
width: 290px;
height: 290px;
list-style-type: none;
p{
font-size: 20px;
list-style-type: none;
}
`

export const Div = styled.div`
justify-content: space-around;
display: flex;
flex-direction: column;
`
