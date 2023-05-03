import '../Cuestionario/Cuestionario.css'
export function Cuestionario(){
    return(
        <>
        <div className='cuestionario'>
        <h1 className="text-center">¡¡FELICIDADES!!</h1>
        <h2 className="text-center">¡Te has ganado responder el siguiente formulario!</h2>

        <div className="containerC">
        <div className="sectionC">
                <h3>1 - ¿Cual es el verdadero nombre de Metricas Frias?</h3>
                <div className="labelC">
                    <input type="radio" name='p0'/> Miguel Angel
                    </div>
                    <div className="labelC">
                    <input type="radio" name='p0'/> Fernando
                    </div>
                <div className="labelC">
                    <input type="radio" name='p0'/> Santiago
                    </div>
                <div className="labelC">
                    <input type="radio" name='p0'/> Sebastian
                    </div>
                </div>
            <div className="sectionC">
                <h3>2 - ¿Cual es el verdadero nombre de Mañas Rufino?</h3>
                <div className="labelC">
                    <input type="radio" name='p1'/> Julian
                    </div>
                <div className="labelC">
                    <input type="radio" name='p1'/> Esteban
                    </div>
                <div className="labelC">
                    <input type="radio" name='p1'/> Gabriel
                    </div>
                <div className="labelC">
                    <input type="radio" name='p1'/> Juan Jose
                    </div>
                </div>
            <div className="sectionC">
                <h3>3 - ¿Cuando lanzaron su primer disco?</h3>
                <div className="labelC">
                    <input type="radio" name='p2'/> 2018
                    </div>
                <div className="labelC">
                    <input type="radio" name='p2'/> 2020
                    </div>
                <div className="labelC">
                    <input type="radio" name='p2'/> 2010
                    </div>
                <div className="labelC">
                    <input type="radio" name='p2'/> 2012
                    </div>
                </div>
            <div className="sectionC">
                <h3>4 - ¿De donde son?</h3>
                <div className="labelC">
                    <input type="radio" name='p3'/> Bello
                    </div>
                    <div className="labelC">
                <input type="radio" name='p3'/> Envigado
                </div>
                <div className="labelC">
                    <input type="radio" name='p3'/> La estrella
                    </div>
                    <div className="labelC">
                <input type="radio" name='p3'/> Envigado
                </div>
                <div className="labelC">
                    <input type="radio" name='p3'/> Itagui
                    </div>
                </div>
            <div className="sectionC">
                <h3>5 - ¿Cual es el album mas famoso?</h3>
                <div className="labelC">
                    <input type="radio" name='p4'/> El abrebocas
                    </div>
                <div className="labelC">
                    <input type="radio" name='p4'/> Manzanas a la vuelta
                    </div>
                <div className="labelC">
                    <input type="radio" name='p4'/> Juegos de Azar
                    </div>
                <div className="labelC">
                    <input type="radio" name='p4'/> Pineal
                    </div>
                </div>
                
            <div className="buttonC text-center">COMPROBAR</div>
            </div>
            </div>
        </>
    )
}