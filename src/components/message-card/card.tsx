const Card = (props = {userName, password}) => {
    return (
        <div className='card-form'>
            <h2>Mensaje en Card</h2>
            <span>{props.userName}</span>
            <span>{props.password}</span>
        </div>
    );
};

export default Card