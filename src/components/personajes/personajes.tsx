import { Fragment } from "react";

const Personajes = (props) => {
    return(
        <Fragment>
            <h1>Nombre 1</h1>
            <p>Nombre 2</p>
            {props.children}
        </Fragment>
    );
}

export default Personajes;