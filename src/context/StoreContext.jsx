import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    // functionality to add or remove item to cart
    const [cartItems,setCartItems] = useState({})

    // to add item into cart
    const addToCart = (itemId) => {
         if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
         }
         else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
         }
    }

    // to remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
      
   // To add final total amount(subtotal) of all products in cart
   const getTotalCartAmount = () => {
     let totalAmount = 0;
     for(const item in cartItems){
          if(cartItems[item]>0){
               let itemInfo = food_list.find((product)=>product._id === item);
               totalAmount += itemInfo.price * cartItems[item];
          }
     }
     return totalAmount;
   }

    const contextValue = {
           food_list,
           cartItems,
           setCartItems,
           addToCart,
           removeFromCart,
           getTotalCartAmount
      }
      return (
        <StoreContext.Provider value={contextValue}>
              {props.children}
        </StoreContext.Provider>
      )
}

export default StoreContextProvider;