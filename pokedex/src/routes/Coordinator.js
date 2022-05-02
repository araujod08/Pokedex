import { useNavigate } from "react-router-dom";
const navigate = useNavigate

export const goToHomePage = (navigate) => {
    navigate("/")
} 
export const goToPokedexPage = (navigate) =>{
    navigate("/pokedex")
}
export const goToDetailPage = (navigate) => {
    navigate("/details")
}
export const goBack = (navigate) =>{
    navigate(-1)
}