import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Bienvenido los trollazos</h1>
            <p>Hola, primera página</p>
            <Link to="/contacts">ir a Contactos</Link>
        </div>
    );
}