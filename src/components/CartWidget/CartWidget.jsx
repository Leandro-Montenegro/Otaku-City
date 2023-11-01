import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import { CartContext, useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cart  } = useCartContext();

    const getQuantityItems = () => {

        let quantity = 0;
        
        if (!cart.items) {
        
        return quantity;
        
        } else {
        
        for (let index = 0; index < cart.items.length; index++) {
        
        quantity += cart.items[index].quantity;
        
        }
        
        return quantity;
        
        }
        
        };

    const quantity = getQuantityItems();

    console.log(cart);

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartIcon />
            <Typography>{quantity}</Typography>
        </div>
    );
}

export default CartWidget;
