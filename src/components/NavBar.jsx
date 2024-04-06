import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import "../styles/NavBar.css";

const NavBar = () => {
  const { carrito } = useContext(MyContext);

  // Función para calcular el precio total de todas las pizzas en el carrito
  const calcularPrecioTotal = () => {
    return carrito.reduce((total, pizza) => total + pizza.precio * pizza.cantidad, 0);
  };

  // Función para calcular la cantidad total de pizzas en el carrito
  const calcularCantidadTotal = () => {
    return carrito.reduce((total, pizza) => total + pizza.cantidad, 0);
  };

  return (
    <>
      <nav>
        <div className="logo"></div>
        <NavLink to={"/carrito"}>
          Carrito - Cantidad: {calcularCantidadTotal()} - Precio total: ${calcularPrecioTotal()}
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;