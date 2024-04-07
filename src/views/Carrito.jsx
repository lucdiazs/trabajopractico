import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import '../styles/Carrito.css';

function Carrito() {
    const { carrito, setCarrito } = useContext(MyContext);

    const calcularPrecioPizza = (pizza) => {
        const precio = parseFloat(pizza.precio);
        const cantidad = parseInt(pizza.cantidad);

        return !isNaN(precio) && !isNaN(cantidad) ? precio * cantidad : 0;
    };

    const calcularPrecioTotal = () => {
        return carrito.reduce((total, pizza) => total + calcularPrecioPizza(pizza), 0);
    };

    const incrementarCantidad = (id) => {
        const updatedCarrito = carrito.map((pizza) =>
            pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
        );
        setCarrito(updatedCarrito);
    };

    const decrementarCantidad = (id) => {
        const updatedCarrito = carrito.map((pizza) =>
            pizza.id === id && pizza.cantidad > 0 ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
        );
        setCarrito(updatedCarrito);
    };

    return (
        <div className='max-container-carrito'>
            <div className='card-carrito'>
                <h2>Tu Pedido</h2>
                <ul className='ul-carrito'>
                    {carrito.map((pizza) => (
                        <li key={pizza.id} className='li-carrito'>
                            {pizza.nombre} 
                            <div className='buttons-carrito'> 
                                <p> Precio ${calcularPrecioPizza(pizza)}</p>
                                <button onClick={() => incrementarCantidad(pizza.id)}>+</button>
                                {pizza.cantidad}
                                <button onClick={() => decrementarCantidad(pizza.id)}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <hr />
                <p className='total'>Total: ${calcularPrecioTotal()}</p>
            </div>
        </div>
    );
}

export default Carrito;
