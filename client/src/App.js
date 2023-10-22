import React, { useState, useEffect } from 'react';
import { getPokemonList } from './api/pokemon';

function App() {

  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonList()
      console.log(data);
      setPokemonData(data?.result)
    }

    fetchData()
  }, [])


  return (
    <div className="App">
      <div>
        {
          pokemonData.map((poke,i) => (
                       <div>

                         <img 
                           style={{with:'300px',height:'300px'}}
                           alt='pokemon'
                           src={`https://img.pokemon.net/artwork/large/${poke.name}.jpg`}
                         />


                       </div>

                    
                   ))

        }
      </div>

    </div>
  );
}

export default App;
