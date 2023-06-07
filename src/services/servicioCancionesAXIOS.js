import axios from "axios";

export async function consutarConAxios(){

    // URI = URL + EP DEL SERVICIO
    const IDARTISTA = "4PLGokgPkAapRsKDwXq408";
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`;

    const TOKEN = "Bearer BQDgRqt2AYRSdE8HPwNAPTTUn6DFzpzY3Tew0n3J1RB7vEGUeD1trZoSs-lSG7WMESgmtzhc_aGDmzQcvkce6BOL9XsZvrIi4pQowHVKx3S5HzaKEq4";

    // CONSTRUYO LA PETICION
    const PETICION={
        method:"GET",
        headers: {
            "Authorization": TOKEN
          }
    }

    // ORDENAR MI RESPUESTA
    try{
        // UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
        let respuesta=await axios.get(URI,PETICION)
        let canciones=respuesta.data

        return canciones
    }catch(error){
        throw new Error["Upss fallamos "+error]
    }
}