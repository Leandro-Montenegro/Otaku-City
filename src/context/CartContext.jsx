import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: carritoInicial, total: 0 });


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
        setCart({products: [], total:0 }, );
    }


    const handleVaciar = () =>{
        vaciarCarrito();
        console.log(cart);
    }

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    return (
        <CartContext.Provider value={{
            cart,
            addToCart ,
            setCart,
            CartProvider,
            vaciarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;