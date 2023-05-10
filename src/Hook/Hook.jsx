import { useState, useEffect } from "react"

export function Hook(){

    //Antes del retorno configuramos nuestras variables de estado
    const [contador,setContador] = useState(0)

    // programando el detector de ejecuciones
    useEffect(function(){
        setContador(contador+1)
    },[])

    //Funcion para decir que hacer cuando le den clic al boton
    function incrementarCuenta(){
        setContador(contador+1)
    }


    return(
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={incrementarCuenta}>Click</button>
                    <h2>La cuenta va en: {contador}</h2>
                </div>
            </div>
        </div>
        </>
    )
}