import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import '../styles/Card.css';
import { LuPizza } from "react-icons/lu";

function CardList() {
    const navigate = useNavigate();
    const { PizzasData, carrito, setCarrito } = useContext(MyContext);

    const handleVerMasClick = (id) => {
        navigate(`/pizzas/${id}`);
    };

    const handleAgregarClick = (id, nombre ,precio) => {
        const pizzaExistente = carrito.find((item) => item.id === id);

        if (pizzaExistente) {
            const updatedCarrito = carrito.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setCarrito(updatedCarrito);
        } else {
            setCarrito([...carrito, { id, nombre, cantidad: 1, precio }]);
        }
    };

    return (
        <>
            {PizzasData.slice(0, 4).map((pizza, index) => (
                <div className='card' key={index}>
                    <img src={pizza.img} alt="" />
                    <div className='card-info'>
                        <h3>{pizza.name}</h3>
                        <ul>
                            <h4>Ingredientes:</h4>
                            {pizza.ingredients.map((ingrediente, index) => (
                                <li key={index}><LuPizza/>{ingrediente}</li>
                            ))}
                        </ul>
                        <hr />
                        <p className='precio'>${pizza.price}</p>
                        <div className='buttons'>
                            <button className='ver-mas' onClick={() => handleVerMasClick(pizza.id)}>Ver Más</button>
                            <button className='añadir' onClick={() => handleAgregarClick(pizza.id, pizza.name, pizza.price)}>Añadir</button>
                        </div>
                    </div>
                    
                </div>
            ))}
        </>
    );
}

export default CardList;
