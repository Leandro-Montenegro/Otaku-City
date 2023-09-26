import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (<AppBar>
        <Toolbar className="toolbar-navbar" sx={{ display: "flex", justifyContent:"space-around"}}>
            <NavLink className="navbar-link" to="/" sx={{ color: "white" }}>
                <Typography sx={{ color: "black"}}>
                    Otaku city
                </Typography>
            </NavLink>
            <NavLink className="navbar-link" to="/" sx={{ color: "white" }}>
                <Typography >
                    Home
                </Typography>
            </NavLink>
            <NavLink className="navbar-link" to="/products" sx={{ color: "white" }}>
                <Typography >
                    Products
                </Typography>
            </NavLink>
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default Navbar;
