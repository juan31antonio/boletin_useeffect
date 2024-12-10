import React, {useState, useEffect } from 'react';

export default function Ejercicio3(){

    const [contador,setContador] = useState(0);
    useEffect(() => {
        document.title = contador
    },[contador]);

    return(
        <div>
            <button onClick={() => setContador(contador + 1)}>Pulsame para +1</button>
            {contador}
        </div>
    )
}