const PokeCard = ({id, name, imageUrl}) => {
    return(<div className="card" key={id}>
        <div className="pokemon">
            <img src={imageUrl} alt="Prueba" />
            <div>
                <h2>
                    ${name} N° ${id}
                </h2>
            </div>
        </div>
    </div>
    )
};

export default PokeCard;