
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
          const existingItem = prevCart.find((item) => item.name === product.name);
          if (existingItem) {
            setTotalItems((p)=>p+0);
            return prevCart.map((item) =>
              item.name === product.name
                ? { ...item, quantity:  product.quantity }
                : item
            );
          } else {
            setTotalPrice(totalPrice + product.price * product.quantity);
            setTotalItems((prev)=>prev+1);
            return [...prevCart, { ...product, quantity: product.quantity }];
          }
        });
        setTotalPrice(totalPrice + product.price * product.quantity);
      };

      console.log(cart)

    return ( 
        <CartContext.Provider value={{cart,totalPrice,totalItems,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext);