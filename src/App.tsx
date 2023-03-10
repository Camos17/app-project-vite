import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/shared/button'
import PokemonList from './components/pokemon/pokemon-list'
import Personajes from './components/personajes/personajes'
import Personaje from './components/personajes/personaje'
import Post from './components/posts/post'
import PokemonsInfo from './components/pokemon/pokemons-info'
import Card from './components/message-card/card'

function App() {
  const [count, setCount] = useState(0);
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setFormValid] = useState(false);

  const handlerOnChangeUserName = (e) => setUserName(e.target.value);
  const handlerOnChangePassword = (e) => setPassword(e.target.value);

  const validateUserName = (userName: string) => {
    const withoutSpace = userName.trim();
    if (withoutSpace.length > 3) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = (password: string) => {
    debugger;
    const withoutSpace = password.trim();
    const passAsArray = withoutSpace.split('');

    const hasNumer = passAsArray.some((character) => {
      if (isNaN(Number(character))) {
        return false;
      } else {
        return true;
      }
    });

    if (withoutSpace.length > 6 && hasNumer) {
      return true;
    } else {
      return false;
    }
  };

  const handlerOnSubmitForm = (e) => {
    e.preventDefault();

    const isUserNameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);

    console.log('username', isUserNameValid, 'password', isPasswordValid);

    if (isUserNameValid && isPasswordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }


    alert(`Bienvenido: ${userName}`);
  };

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
    <>
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

        <Post></Post>

        <PokemonsInfo></PokemonsInfo>
      </div>

      {/* FORM */}
      <div>     
        <form onSubmit={handlerOnSubmitForm}>
          <input 
            type='text'
            placeholder='Nombre de usuario'
            value={userName}
            onChange={handlerOnChangeUserName}
          />

          <input 
            type='text'
            placeholder='Password'
            value={password}
            onChange={handlerOnChangePassword}
          />

          <button type='submit'>Ingresar</button>
        </form>

        {!isFormValid ? <p>Por favor chequea que la información sea correcta</p> : <Card userName={userName} password={password}></Card>}
      </div>
    </>
  )

}

export default App
