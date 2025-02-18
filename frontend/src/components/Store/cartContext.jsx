
import React, { useEffect } from "react";
import { createContext,useContext,useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalItems,setTotalItems]=useState(0);
    const {user}=useAuth();

    useEffect(() => {
      if (!user || !user._id) return; // Ensure user is available
    
      axios.get(`http://localhost:3000/cart/get/${user._id}`)  // ✅ Pass userId in URL
        .then((res) => {
          if (res.data.data.length > 0) {
            setCart(res.data.data);
            const calculatedTotalPrice = res.data.data.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            );
            setTotalPrice(calculatedTotalPrice);
            setTotalItems(res.data.data.length);
          }
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }, [user]); 

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item._id === product._id);


          if (existingItem) {
            console.log("first",existingItem);
            let obj={
              title:product.title,
              price:product.price,
              image:product.image,
              quantity:product.quantity,
              userId:user._id
            }

            axios.post("http://localhost:3000/cart/add",obj);
            return prevCart.map((item) =>
              item.title === product.title
                ? { ...item, quantity: product.quantity }
                : item
            );
          } else {
            console.log("Second",product);
            let obj={
              title:product.title,
              price:product.price,
              image:product.image,
              quantity:product.quantity,
              userId:user._id
            }

            axios.post("http://localhost:3000/cart/add",obj);

            return [...prevCart, { ...product, quantity: product.quantity }];
          }
        });
        setTotalPrice((prevTotal) => prevTotal + product.price * product.quantity);
        setTotalItems((prevTotal) => prevTotal + 1);
      };

      const removeFromCart = (product) => {
        if (!user || !user._id) {
          console.error("User ID is missing");
          return;
        }
      
        const url = `http://localhost:3000/cart/delete/${product.title}`;
      
        axios.delete(url, { headers: { "Content-Type": "application/json" } }) 
          .then(() => {
            setCart((prevCart) => prevCart.filter((item) => item._id !== product._id));
            setTotalPrice((prevTotal) => prevTotal - product.price * product.quantity);
            setTotalItems((prevTotal) => prevTotal - 1);
          })
          .catch((error) => {
            console.error("Error deleting cart item:", error);
          });
      };

      const removeAllFromCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalItems(0);
      };


    return ( 
        <CartContext.Provider value={{cart,totalPrice,totalItems,addToCart,removeFromCart,removeAllFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext);