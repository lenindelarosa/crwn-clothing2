import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    
    if(existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1 }
            : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const delCartItem = (cartItems, productToDelete) => {
    
    const isLastCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id && cartItem.quantity===1
    );
    
    if(!isLastCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToDelete.id
            ? {...cartItem, quantity: cartItem.quantity -1 }
            : cartItem
        );
    } else {
        return cartItems.filter((item) => item.id !== productToDelete.id);
    }
};

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    delItemFromCart: () => {},
    removeItemFromCart: () => {}

});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const delItemFromCart = (productToDelete) => {
        setCartItems(delCartItem(cartItems, productToDelete));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, delItemFromCart, removeItemFromCart, cartItems, cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider> 
};