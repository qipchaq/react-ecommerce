import React, { createContext, useContext, useState, useEffect } from 'react';
 

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const incQty = () => {
        setQty((prev) => prev + 1)
    }

    const decQty = () => {
        setQty((prev) => {
            if (prev - 1 < 1) return 1;
            return prev - 1
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                // onAdd,
                // toggleCartItemQuanitity,
                // onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities 
            }}
        >
            {children}
        </Context.Provider>
    )
}