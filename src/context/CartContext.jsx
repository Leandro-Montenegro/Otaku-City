import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const carritoInicial = []


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: carritoInicial, total: 0 });
    
    const removeFromCart = (productId) => {
        const removedProduct = cart.items.find(item => item.id === productId);
    
        if (removedProduct) {
            const updatedCartItems = cart.items.filter(item => item.id !== productId);
            const updatedTotal = cart.total - (removedProduct.price * removedProduct.quantity);
    
            setCart({
                items: updatedCartItems,
                total: updatedTotal
            });
        }
    };
    
    const addToCart = (product) => {
        let prod = cart.items.find(p => p.id == product.id);
        if (prod) {
            product.quantity += prod.quantity;
            cart.total -= prod.price * prod.quantity;
            cart.items = cart.items.filter(p => p.id != product.id);
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        } else {
            setCart((prevCart) => ({
                ...prevCart,
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        }
    }

    const vaciarCarrito = () => {
        setCart({ items: [], total: 0 });

    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart ,
            setCart,
            vaciarCarrito,
            CartProvider,
            removeFromCart,
        }}>
        
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;