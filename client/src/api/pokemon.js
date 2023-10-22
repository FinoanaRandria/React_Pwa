import axios from "axios"



const URL = `https://pokeapi.co/api/v2/pokemon?limit=50`


export const getPokemonList = async ()=>{

     const {data} = await axios.get(URL)

     return data
}