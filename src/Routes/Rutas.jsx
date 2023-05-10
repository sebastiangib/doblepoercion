import { Route, Routes } from "react-router-dom"

import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import {Menu} from "../shared/Menu/Menu"
import { Shop } from "../Shop/Shop"
import { Fans } from "../Fans/Formulario/Fans"
import { Cuestionario } from "../Fans/Cuestionario/Cuestionario"
import { Musica } from "../Musica/Musica"
import { Carga } from "../Hook/Carga"


export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrantes" element={<Members />} />
      <Route path="/tienda" element={<Shop />} />
      <Route path="/musica" element={<Musica />} />
      <Route path="/fans" element={<Fans />} />
      <Route path="/cuestionario" element={<Cuestionario />} />
      <Route path="/hooks" element={<Carga />} />
    </Routes>
    </>
    )
}