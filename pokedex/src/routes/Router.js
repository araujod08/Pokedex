import HomePage from "../Pages/HomePage"
import DetailsPage from "../Pages/DetailsPage"
import PokedexPage from "../Pages/PokedexPage"
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