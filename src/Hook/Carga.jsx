import { useState,useEffect } from "react"

export function Carga(){

    const[estaCargando,setEstaCargando] = useState(true)
    const[tiempo,setTiempo] = useState(0)

    useEffect(function(){
        if(tiempo>0){
        setEstaCargando(false)
    }else{
        setEstaCargando(true)
    }
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)
    },5000)

    if(estaCargando){

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src="../../src/assets/img/dobleporcion-doble-unscreen.gif" alt="" className="img-fluid mx-auto d-block"/>
                    <h3 className="text-center">Cargando...</h3>
                </div>
            </div>
        </div>
        </>
    )
    }else{
        return(
            <>
            <h4>YA CARGAMOS LA BUENA MI REY</h4>
            </>
        )
    }
}