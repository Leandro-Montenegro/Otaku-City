import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const [compraFinalizada, setCompraFinalizada] = useState(false);
    const [cantidadProductosComprados, setCantidadProductosComprados] = useState(0);

    const pedidosRef = collection(db, "pedidos");

    const handleFinalizarCompra = async () => {
        if (!compraFinalizada) {
            const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

            try {
                const nuevoPedido = {
                    productos: carrito,
                    total: precioTotal(),
                    cantidadProductos: cantidadTotal,
                    fecha: serverTimestamp(),
                };

                await addDoc(pedidosRef, nuevoPedido);

                setCompraFinalizada(true);
                setCantidadProductosComprados(cantidadTotal);
                vaciarCarrito();
            } catch (error) {
                console.error("Error al enviar a firebase", error);
                
            }
        }
    };

    return (
        <div className="checkoutContainer">
            {compraFinalizada ? (
                <div>
                    <h2>¡Gracias por tu compra!</h2>
                    <p>Productos comprados: {cantidadProductosComprados}</p>
                    <p>Total: ${precioTotal()}</p>
                </div>
            ) : (
                <div>
                    <h2>Checkout</h2>

                    {carrito.length === 0 ? (
                        <p>Tu carrito está vacío.</p>
                    ) : (
                        <div>
                            <ul>
                                {carrito.map((item) => (
                                    <li key={item.id}>
                                        {item.titulo} - Precio: ${item.precio} - Cantidad: {item.cantidad}
                                    </li>
                                ))}
                            </ul>

                            <p>Total: ${precioTotal()}</p>

                            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                            <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Checkout;

