import React, { useEffect } from 'react';

export default function Ejercicio2(){
    useEffect(() => {
        document.title = 'Bienvenidos a mi app'
    },[]);
    return(
        <h1>Componente de ejercicio 2</h1>
    )
}