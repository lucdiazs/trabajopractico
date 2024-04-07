import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext()

const MyContextProvider = ({children}) => {
    const [PizzasData, setPizzasData] = useState([])
    const [carrito, setCarrito] = useState([])
    
    const DataUrl = '/pizzas.json'

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await fetch(DataUrl)
                if(!response.ok){
                    throw new Error('No se obtienen resultados de fetch')
                }
                const dataFetch = await response.json()
                setPizzasData(dataFetch)
                
            } catch (error) {
                console.error('ha ocurrido un error',error)
            }
        }
        fetchData()
        
        
     },[]
    
     )
     console.log(PizzasData)
    return (
        <>
            <MyContext.Provider value={{PizzasData, setPizzasData,carrito, setCarrito}}>
                {children}
            </MyContext.Provider>
        </>
    )


}
export default MyContextProvider