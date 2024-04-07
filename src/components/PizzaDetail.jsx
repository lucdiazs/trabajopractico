import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import { LuPizza } from "react-icons/lu";
import '../styles/PizzaDetail.css'


function PizzaDetail() {
    const { id } = useParams();
    const { PizzasData, carrito, setCarrito } = useContext(MyContext);
    const [loading, setLoading] = useState(true);
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        console.log('ID de la pizza:', id);
        const pizzaFound = PizzasData.find((pizza) => pizza.id === id);
        console.log('Pizza encontrada:', pizzaFound);
        if (pizzaFound) {
            setPizza(pizzaFound);
            setLoading(false);
        }
    }, [PizzasData, id]);

    const addToCart = () => {
        if (pizza) {
            const existingPizza = carrito.find((p) => p.id === pizza.id);
            if (existingPizza) {
                const updatedCarrito = carrito.map((p) =>
                    p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
                );
                setCarrito(updatedCarrito);
            } else {
                const precioTotal = pizza.price * 1;
                const pizzaConPrecio = { ...pizza, cantidad: 1, precio: precioTotal, nombre: pizza.name }
                setCarrito([...carrito, pizzaConPrecio]);
            }
        }
    };

    if (loading) {
        return <div>Buscando pizzas...</div>;
    }

    if (!pizza) {
        return <div>Falla al cargar detalles para esta pizza.</div>;
    }

    return (
        <>
        <div className='max-container'>
        <div className='container'>
            <img src={pizza.img} alt={pizza.name} />
            <div className='container-detail'>
                <h2>{pizza && pizza.name}</h2>
                <p className='desc'>{pizza.desc}</p>
                <div className='ing'>
                    <p>Ingredientes:</p>
                    <ul>
                        {pizza.ingredients.map((ingrediente, index) => (
                            <li key={index}><LuPizza/>{ingrediente}</li>
                        ))}
                    </ul>

                </div>
                <hr />
                <div className='price-btn'>
                    <p>Precio: $ {pizza.price}</p>
                    <button onClick={addToCart}>Agregar al carrito</button>

                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default PizzaDetail;