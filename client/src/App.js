import React, { useState, useEffect } from 'react';
import { getPokemonList } from './api/pokemon';

function App() {

  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonList()
      console.log(data);
      setPokemonData(data?.results)
    }

    fetchData()
  }, [])


  return (
    <div className="App">
      <div style={{
       marginTop:"40px", justifyContent:"space-around", display:"flex", flexWrap:"wrap" , width:"90%",margin:"auto"

      }}>
        {
          pokemonData.map((poke,i) => (
                       <div key={i} style={{width:"400px", height:"330px", border:"2px solid #00000" ,margin:"30px 10px"}}>
                            <div style={{padding:"5px 10px"}} >
                                    <p style={{fontWeight:"bold", textTransform:"capitalize"}}>{poke.name}</p>

                            </div>
                         <img 
                           style={{with:'300px',height:'300px'}}
                           alt='pokemon'
                           src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
                         />

                            
                            
                       </div>
                          
                         
                         

                    
                   ))

        }
      </div>

    </div>
  );
}

export default App;
