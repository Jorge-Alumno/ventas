import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacto() {
    return (
        <div>
            <h1>Contactos</h1>
            <form>
                <label>Nombre</label>
                <input type="text" placeholder='Escribe tu nombre' />
                <label>Correo</label>
                <input type="email" placeholder='Escribe tu correo' />
                <button>Enviar</button>
            </form>
            <Link to="/">ir a Home</Link>
        </div>
    );
}