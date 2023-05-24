export async function consultarCanciones(){

    // RECETA PARA CONSUMIR APIS CON JS.

    // 1. PA' ONDE VAS OME = URL + EP DEL SERVICO

    const IDARTISTA="4PLGokgPkAapRsKDwXq408"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQB0wv2Fkc4nKRySUKSlkfiXKX4EyohQQhJou31v0KA09fqFge_cRlbjBRz8RpSI1qoU8NNfBBELv3uPfQs_yvLPZsv0W04gFzqJVfyrtgiQq7HaGfE"

    // 2. QUE VAS A HACER ALLA OME = CONFIGURO LA PETICION

    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        }
    }

    // 3. PIDA EL TAXI = UTILICE LA PROMESA "FETCH" PARA IR AL BACK Y CONSUMIR EL API

    let respuesta=await fetch(URI,peticion)
    let canciones=await respuesta.json()

    return canciones
}