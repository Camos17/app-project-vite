import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/shared/button'
import PokemonList from './components/pokemon/pokemon-list'
import Personajes from './components/personajes/personajes'
import Personaje from './components/personajes/personaje'

function App() {
  const [count, setCount] = useState(0);

  function downCount() {
    setCount((count) => {
      if (count <= 0) {
        count = 0;
      } else {--count}
      return count;
   })
  };

  
  const items = [
    {
        num: 1,
        name: "Bulbasaur",
        image: "http://api.pokemon.dev/images/bulbasaur.jpg"
    },
    {
        num: 2,
        name: "Pikachu",
        image: "http://api.pokemon.dev/images/pikachu.jpg"
    },
    {
        num: 3,
        name: "Bulbasaur",
        image: "http://api.pokemon.dev/images/bulbasaur.jpg"
    },
    {
        num: 4,
        name: "Bulbasaur",
        image: "http://api.pokemon.dev/images/bulbasaur.jpg"
    }
  ];

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>
        <h1>Hello React</h1>
        <div className='card'>
          Aquí comienza nuestra aventura con React 🤜🤛
        </div>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <button onClick={() => downCount()}>
        Count {count}
      </button>

      <Button>Hello - children </Button>

      <Personajes>
      <Personaje text="Texto Prueba"></Personaje>
      </Personajes>

      {/* <PokemonList items={items}></PokemonList> */}
    </div>
  )
}

export default App
