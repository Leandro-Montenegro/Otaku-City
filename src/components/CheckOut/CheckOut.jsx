import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";


const Checkout = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Orden generada con éxito");

        setName("");
        setPhone("");
        setEmail("");
    };
    return (
        <div>
            <h2>Terminar compra</h2>
            <h5>Por favor llenar datos</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb">
                    <label className="form-label">Nombre completo</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Nombre y apellido"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb">
                    <label className="form-label">Numero de telefono</label>
                    <input
                        className="form-control"
                        type="number"
                        placeholder="5435189426489"
                        name="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb">
                    <label className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="lalala@lala.com"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb">
                    <label className="form-label">repita su email</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="lalala@lala.com"
                        name="mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className="btn btn-dark" type="submit">Generar orden</button>
            </form>
        </div>
    )
}
export default Checkout;

