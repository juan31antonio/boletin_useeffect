import React, {useState, useEffect } from 'react';

export default function Ejercicio5(){

    const [ancho, setAncho] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () =>
            setAncho(window.innerWidth)
        )
    },[]);

    return(
        <div>
            <h1>El ancho actual de la pantalla es: {ancho}</h1>
        </div>
    )
}