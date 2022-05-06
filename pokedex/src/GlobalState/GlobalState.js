import React, { useState, useEffect, useContext } from 'react'
import { Pokemon } from './Context'
import axios from 'axios'

export const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [detail, setDetail] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [detailsPokemon, setDetailsPokemon] = useState([])

    const getPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then((response) => {
                setPokemons(response.data.results)
            })
            .catch((error) => {
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
                })
                .catch((error) => {
                })
        })
    }, [pokemons])

    const addPokedex = (id) => {
        const pokemon = detail.find((poke) => {
            return poke.id === id
        })
        const newPokemon = [...pokedex, pokemon]
        setPokedex(newPokemon)

        const removePokemon = detail.filter((poke) => {
            return poke.id !== id
        })
        setDetail(removePokemon)
        alert("Parabéns, o pokémon foi adicionado com sucesso!")
    }

    const removePokemon = (id) => {
        const pokemon = pokedex.find((poke) => {
            return poke.id === id
        })
        const newPokemon = [...detail, pokemon]
        setDetail(newPokemon)

        const removePokemon = pokedex.filter((poke) => {
            return poke.id !== id
        })
        setPokedex(removePokemon)
        alert("O pokémon foi removido com sucesso!")
    }

    const getPokemonDetailFunction = (id) => {
        const pokemon = detail.find((poke) => {
            return poke.id === id
        })
        setDetailsPokemon(pokemon)
    }

    const allState = {
        pokemons, setPokemons, detail, setDetail, pokedex, setPokedex, 
        addPokedex, detailsPokemon, getPokemonDetailFunction,
        removePokemon
    }

    return (
        <Pokemon.Provider value={allState}>
            {props.children}
        </Pokemon.Provider>
    )
}

