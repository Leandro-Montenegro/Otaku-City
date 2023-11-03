import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";


const Checkout = () => {
    return (
        <div>
            <h2>Terminar compra</h2>
            <h5>por favor llenar datos</h5>
            <form>
                <div className="mb">
                    <label className="form-label">Nombre completo</label>
                    <input className="form-control" type="text" placeholder="Nombre y apellido" name="name" /> 
                </div>
                <div className="mb">
                    <label className="form-label">Numero de telefono</label>
                    <input className="form-control" type="number" placeholder="5435189426489" name="Phone" /> 
                </div>
                <div className="mb">
                    <label className="form-label">email</label>
                    <input className="form-control" type="email" placeholder="lalala@lala.com" name="mail" /> 
                </div>
                <div className="mb">
                    <label className="form-label">repita su email</label>
                    <input className="form-control" type="email" placeholder="lalala@lala.com" name="mail" /> 
                </div>
                <button className="btn btn-dark" type="submit">Generar orden</button>
            </form>
        </div>
    )
    }
export default Checkout;

