import { useEffect, useState } from "react";

const Order = () => {

    const [newOrder, setNewOrder] = useState('');

    useEffect(() => {
        const interval = setTimeout(() => {
            console.log('Componente actualizado - Pedido cargado');
            setNewOrder('Nuevo pedido - Pizza Carne');
        }, 2000);
    });
    
    return(
        <div>Se ha cargado: {newOrder}</div>
    );

};

export default Order