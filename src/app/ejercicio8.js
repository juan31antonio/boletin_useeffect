import { useEffect, useState } from "react";

export default function Ejercicio8(){

    const [mensajeActual, setMensajeActual] = useState([]);
    const [indice, setIndice] = useState(0);

    const mensajes = [
        "Persona 1: ¡Hola! ¿Cómo estás?",
        "Persona 2: ¡Hola! Todo bien, ¿y tú?",
        "Persona 1: Todo bien también. ¿Qué planes para hoy?",
        "Persona 2: Pues, pensaba salir a caminar por el parque, ¿y tú?",
        "Persona 1: Yo tengo que estudiar un poco, pero después me gustaría ir al cine.",
        "Persona 2: ¿Qué película te gustaría ver?",
        "Persona 1: Estaba pensando en una de acción, tal vez 'Misión Imposible'.",
        "Persona 2: ¡Suena genial! Yo también quiero verla. ¿A qué hora vamos?",
        "Persona 1: ¿Te parece bien a las 7pm?",
        "Persona 2: Perfecto, ¡nos vemos a las 7 entonces!"
      ];
    
      useEffect(() => {
        const intervalId = setInterval(() => {
            if(indice < mensajes.length){
                setMensajeActual([...mensajeActual,mensajes[indice]])
                setIndice(indice + 1)
            }
        }, 5000);

        return () => clearInterval(intervalId);
      }, [indice]);

    return(
        <div>
            {mensajeActual.map((mensaje, index) => (
                <p key={index}>{mensaje}</p>
            ))}
        </div>
    )
}