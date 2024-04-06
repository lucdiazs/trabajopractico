// CardList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import '../styles/Card.css';

function CardList() {
    const navigate = useNavigate(); // Hook para la navegación programática
    const { PizzasData, carrito, setCarrito } = useContext(MyContext);

    const handleVerMasClick = (id) => {
        navigate(`/pizzas/${id}`); // Navegar a la ruta de detalles de la pizza
    };
    const handleAgregarClick = (id, nombre ,precio) => {
        const pizzaExistente = carrito.find((item) => item.id === id);

        if (pizzaExistente) {
            const updatedCarrito = carrito.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1,} : item
            );
            setCarrito(updatedCarrito);
        } else {
            setCarrito([...carrito, { id, nombre, cantidad: 1, precio}]);
        }
    }

    return (
        <>
            {PizzasData.map((pizza, index) => (
                <div className='card' key={index}>
                    <img src={pizza.img} alt="" />
                    <div className='card-info'>
                        <h3>{pizza.name}</h3>
                        <ul>
                            <h4>Ingredientes:</h4>
                            {pizza.ingredients.map((ingrediente, index) => (
                                <li key={index}>{ingrediente}</li>
                            ))}
                        </ul>
                        <hr />
                        <p className='precio'>{pizza.price}</p>
                    </div>
                    <div>
                        <button className='ver-mas' onClick={() => handleVerMasClick(pizza.id)}>Ver Más</button>
                        <button className='añadir' onClick={() => handleAgregarClick(pizza.id, pizza.name, pizza.price)}>Añadir</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardList;