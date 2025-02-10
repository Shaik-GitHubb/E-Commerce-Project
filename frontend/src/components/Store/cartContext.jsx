
import React from "react";
import { createContext,useContext,useState } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalItems,setTotalItems]=useState(0);

    // const addToCart=(product)=>{
    //     setCart([...cart,product]);
    //     setTotalPrice(totalPrice+product.price);
    //     setTotalItems(totalItems+1);
    // }

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.title === product.title);

          if (existingItem) {
            console.log("first",existingItem);
            return prevCart.map((item) =>
              item.name === product.name
                ? { ...item, quantity: product.quantity }
                : item
            );
          } else {
            console.log("Secong",product);
            return [...prevCart, { ...product, quantity: product.quantity }];
          }
        });
        setTotalPrice((prevTotal) => prevTotal + product.price * product.quantity);
        setTotalItems((prevTotal) => prevTotal + 1);
      };

      const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
        setTotalPrice(totalPrice - product.price * product.quantity);
        setTotalItems((prev)=>prev-1);
      };


    return ( 
        <CartContext.Provider value={{cart,totalPrice,totalItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext);