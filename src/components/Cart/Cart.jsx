import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Button,
} from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; 

const Cart = () => {
    const { cart, vaciarCarrito, removeFromCart } = useCartContext();
    const navigate = useNavigate(); 

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="container">
            <Paper elevation={3}>
                <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
                    Cart
                </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2 }}>
                        Carrito vacío
                    </Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Quitar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} />
                                        </TableCell>
                                        <TableCell>{item.title} x{item.quantity}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>${item.price * item.quantity}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => removeFromCart(item.id)} 
                                            >
                                                Quitar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={3}>Total:</TableCell>
                                    <TableCell>${cart.total?.toFixed(2)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                <Button variant="contained" color="secondary" onClick={vaciarCarrito}>
                    Vaciar Carrito
                </Button>
                <Button variant="contained" color="primary" onClick={handleCheckout}>
                    Finalizar Compra
                </Button>
            </Paper>
        </div>
    );
};

export default Cart;
