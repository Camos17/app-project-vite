import PokeCard from "./pokemon-card";

const PokemonList = ({items}) => {
    const renderesItems = () => {
        items.map( item => {
            return <PokeCard id={item.id} name={item.name} imageUrl={item.image}/>
        });
        return <div className="container">{renderesItems()}</div>
    };
}

export default PokemonList;