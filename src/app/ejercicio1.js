import React, { useEffect } from 'react';

export default function Ejercicio1(){
    useEffect(() => {
        console.log("El componente se ha montado")
    },[]);
    return(
        <h1>Componente de ejercicio 1</h1>
    )
}