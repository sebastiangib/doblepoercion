import React from 'react'
import ReactDOM from 'react-dom/client'

// Impotando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Importando Routes
import { BrowserRouter } from "react-router-dom"
import {Rutas} from "./Routes/Rutas"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rutas/>
    </BrowserRouter>
  </React.StrictMode>,
)
