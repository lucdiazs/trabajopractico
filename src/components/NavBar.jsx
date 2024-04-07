import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import "../styles/NavBar.css";
import { LuPizza } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const { carrito } = useContext(MyContext);

  const calcularPrecioTotal = () => {
    return carrito.reduce((total, pizza) => total + pizza.precio * pizza.cantidad, 0);
  };

  const calcularCantidadTotal = () => {
    return carrito.reduce((total, pizza) => total + pizza.cantidad, 0);
  };

  const Active = ({isActive}) => (isActive ? 'active' : 'idle')


  return (
    <>
      <nav>
        <NavLink className={Active} to={'/'}>
          <div className="logo">
            <LuPizza className="icon" />Pizzería Mamma Mia!
          </div>
        </NavLink>
        <div className="container-carrito-nav">
            <NavLink className={Active} to={"/carrito"}><CiShoppingCart className="carrito-icn"/></NavLink>
            <NavLink className='cantidades' to={"/carrito"}>
              <p>    
                 Llevas {calcularCantidadTotal()} {calcularCantidadTotal() > 1 || calcularCantidadTotal() === 0 ?'pizzas' : 'pizza'} 
              </p>
              <p>
                 Total ${calcularPrecioTotal()}
              </p>
            </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;