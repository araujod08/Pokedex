import styled from "styled-components"

export const HeaderContainer = styled.div`
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

export const SubHeader = styled.div`
display: flex;
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

export const PokedexContainer = styled.div`
display: flex;
justify-content: center;
color: #dedede;
flex-direction:row;
flex-wrap:wrap;
height: 100vh;
padding: 15px;
gap: 20px;
`

export const CardInterno = styled.div`
display: flex;
width: 300px;
height: 300px;
justify-content: space-between;
flex-direction: column;
align-items: center;
border: 5px double white ;
border-radius: 10px;
border-bottom-right-radius:0;
border-bottom-left-radius: 0;
img{
max-width: 120px;
max-height: 120px;
}
button{
font-family: 'Press Start 2P', cursive;
width: 300px;
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
background-color: #dc0a2d!important;
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

export const Header3 = styled.div`
background-color: #dc0a2d;
width: 300px;
border-radius: 7px;
border-bottom-right-radius:0;
border-bottom-left-radius: 0;
h3{
text-align: center;
font-size: 20px;
}
`