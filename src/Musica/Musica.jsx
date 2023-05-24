import '../Musica/Musica.css'
import {consultarCanciones} from "../services/servicioCanciones"
import { useState,useEffect } from 'react'

export function Musica(){

    let musica = [
        {
            nombre:"El abrebocas",
            descripcion:"El abrebocas es un album musical, principalmente compuesto por Doble Porción, con la discografia de Moebiuz, y se publico el 2 de enero de 2013. Su genero es Hip-hop/rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20el%20abrebocas.png?alt=media&token=7582055e-88d3-440a-815c-768681f5d120",
            precio:70000,
            popularidad:4.2,
            id:"1"
        },
        {
            nombre:"Juegos de azar",
            descripcion:"Juegos de azar es un album musical, principalmente compuesto por Doble Porción, con la discografia de Doble porcion, y se publico el 10 de julio de 2020. Su genero es Musica pop-India,Hip-hop/rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20juegos%20de%20azar.png?alt=media&token=d2c1016e-4b08-44b1-8db5-f1a92665f1d4",
            precio:75000,
            popularidad:4.2,
            id:"2"
        },
        {
            nombre:"Manzanas a la vuelta",
            descripcion:"Manzanas a la vuelta es un album, principalmente compuesto por Doble Porción, con la discografia de Moebiuz, y se publico el 16 de septiembre de 2016. Su genero es Hip-hop/rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20manzanas%20a%20la%20vuelta.png?alt=media&token=d2034771-d162-4aad-9071-0e8847fa6284",
            precio:90000,
            popularidad:4.2,
            id:"3"
        },
        {
            nombre:"Serenata sin mariachis",
            descripcion:"Serenata sin mariachis es un album, principalmente compuesto por Metricas Frias, con la discografia de Moebiuz, y se publico el 10 de agosto de 2016. Su genero es Música pop india, Japanese Hip Hop/Rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20serenata%20sin%20mariachis.png?alt=media&token=b0ab03d3-78a1-4d0c-ab8e-909df9f6d0a8",
            precio:100000,
            popularidad:4.2,
            id:"4"
        },
        {
            nombre:"Rap de la montaña",
            descripcion:"Rap de la montaña un album musical, principalmente compuesto por Mañas Ru-fino, con la discografia de Moebiuz, y se publico el 6 de enero de 2015. Su genero es Hip-hop/rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20rap%20de%20la%20monta%C3%B1a.png?alt=media&token=d78977cf-85e5-4db4-a117-daf2ed854b8a",
            precio:95000,
            popularidad:4.2,
            id:"5"
        },
        {
            nombre:"Despues de muertos",
            descripcion:"Despues de muertos es un album musical, principalmente compuesto por Metricas Frias, con la discografia de Cocaine Beatz, y se publico el 17 de diciembre de 2021. Su genero es Música pop india, Clásica y Hip Hop/Rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20despues%20de%20muertos.png?alt=media&token=cd9d7eeb-7aaf-4be6-900d-d716c5d6591f",
            precio:70000,
            popularidad:4.2,
            id:"6"
        },
        {
            nombre:"Tamara",
            descripcion:"Tamara un album musical, principalmente compuesto por Mañas Ru-fino, con la discografia de Mañas Ru-fino, y se publico el 30 de abril de 2020. Su genero es Hip-hop/rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20tamara.png?alt=media&token=620192aa-7900-41a9-83fe-d67d31dfd3a8",
            precio:85000,
            popularidad:4.2,
            id:"7"
        },
        {
            nombre:"Oculto",
            descripcion:"Oculto es un album musical, principalmente compuesto por Granuja y Metricas Frias, con la discografia de Granuja, y se publico el 4 de diciembre de 2020. Su genero es Hip-hop/rap.",
            fotos:"https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20oculto.png?alt=media&token=388330a5-b5e9-4c22-9ef3-31d4ae59c28d",
            precio:80000,
            popularidad:4.2,
            id:"8"
        }
    ]

    const [canciones,setCanciones]=useState(null)
    const [estacargando,setEstacargando]=useState(true)

    useEffect(function(){
        consultarCanciones().then(function(respuesta){
            setCanciones(respuesta.tracks)
            setEstacargando(false)
        })
    },[])

    if(estacargando){
        return(
            <>
            <h1>Estoy cargando</h1>
            </>
        )
    }else{
        return(
            <>
            <div className="bodyMU">
        {musica.map(function(music){
            return(
                <div key={music.id}>
            <div className="col">
            <div className="cardMU">
                <div className='face front'>
                <img src={music.fotos} className="img-fluid w-100"/>
                <h3 className="text-center">{music.nombre}</h3>
            </div>
            <div className="face back">
            <h3 className="text-center">{music.nombre}</h3>
            <p>{music.descripcion}</p>
            <div className='link'>
                <a href="#">Detalles</a>
            </div>
            </div>
        </div>
        </div>
        </div>
        )
        })
        }
        </div>
            {
                canciones.map(function(cancion){
                    return(
                        <audio controls src={cancion.preview_url}></audio>
                    )
                })
            }
            </>
        )
    }
}

