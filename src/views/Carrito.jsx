import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

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
            pizza.id === id && pizza.cantidad > 1 ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
        );
        setCarrito(updatedCarrito);
    };

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {carrito.map((pizza) => (
                    <li key={pizza.id}>
                        {pizza.nombre} - Cantidad: {pizza.cantidad} - Precio por pizza: {calcularPrecioPizza(pizza)}
                        <button onClick={() => incrementarCantidad(pizza.id)}>+</button>
                        <button onClick={() => decrementarCantidad(pizza.id)}>-</button>
                    </li>
                ))}
            </ul>
            <p>Precio total de todas las pizzas: {calcularPrecioTotal()}</p>
        </div>
    );
}

export default Carrito;