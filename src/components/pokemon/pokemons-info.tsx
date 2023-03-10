import { Fragment } from "react";

const PokemonsInfo = () => {
  const pokemonsInfo = [
    {
      id: 1,
      name: 'Pickachu'
    },
    {
      id: 2,
      name: 'Bulbasur'
    }
  ];

  const deletePokemonHandler = (id: number, event) => {
    event.preventDefault();
    console.log(`Pokemon ID ${id} fue eliminado`);
  };


  return (
    <>
      {
        pokemonsInfo.map((pokemon) => (
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            <button onClick={(e) => deletePokemonHandler(pokemon.id, e)}>Eliminar pokemon</button>
          </div>
        ))
      }
    </>
  );


};

export default PokemonsInfo