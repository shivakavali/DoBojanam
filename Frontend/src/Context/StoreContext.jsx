import { createContext, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = { ...prevCartItems };
            if (!updatedCartItems[itemId]) {
                updatedCartItems[itemId] = 1;
            } else {
                updatedCartItems[itemId]++;
            }
            return updatedCartItems;
        });
    };

    const removeItems = (itemId) => {
        setCartItems(prevCartItems => {
            const updatedCartItems = { ...prevCartItems };
            if (updatedCartItems[itemId] > 0) {
                updatedCartItems[itemId]--;
            }
            return updatedCartItems;
        });
    };

    const getTotalCartAmount = ()=>{
        
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                const itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeItems,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};


export default StoreContextProvider;