import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {

    return (<AppBar>
        <Toolbar className="toolbar-navbar" sx={{ display: "flex", justifyContent:"space-around"}}>
            <Typography sx={{ color: "black"}}>
            Otaku City
            </Typography>
            <Button sx={{ color: "white" }}>
                Home
            </Button>
            <Button sx={{ color: "white" }}>
                Accesorios
            </Button>
            <Button sx={{ color: "white" }}>
                Mangas
            </Button>
            <Button sx={{ color: "white" }}>
                Cosplay
            </Button>
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default Navbar;
