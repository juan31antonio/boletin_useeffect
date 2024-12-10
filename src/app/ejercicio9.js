import { useEffect, useState } from "react";

export default function Ejercicio9(){

    const [contadorRenderizado, setContadorRenderizado] = useState(0)
    const [contador, setContador] = useState(0)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setContador(contador + 1); 
          }, 1000);

          return() => clearInterval(intervalId)
    },[contador]);

    useEffect(() => {
        setContadorRenderizado(contadorRenderizado + 1)
    });

    return(
        <div>
            <h1>El contador que se actualiza cada renderizado: {contadorRenderizado}</h1>
            <h1>El contador que se actualiza cada vez que cambia el contador: {contador}</h1>
        </div>
    )
}