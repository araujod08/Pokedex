import HomePage from "../Pages/HomePage/HomePage"
import DetailsPage from "../Pages/DetailPage/DetailsPage"
import PokedexPage from "../PokedexPage/PokedexPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pokedex" element={<PokedexPage/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}