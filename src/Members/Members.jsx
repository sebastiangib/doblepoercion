import 'animate.css'
import WOW from 'wow.js'
import { useEffect } from 'react';
import '../Members/Member.css'

export function Members(){

  useEffect(function(){
    const wow = new WOW();
    wow.init();
  },[])

  return (
    <>
    <section>
        <div className="container my-5">
          <div className="row justify-content-start">
            <div className="col-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias3.jpg?alt=media&token=08a20f0d-a239-4753-b89d-890a1f7788f5"
                className="img-fluid w-100 wow animate__animated animate__slideInLeft"
              />
            </div>
            <div className="col-6">
              <h1 className="text-center">Metricas Frias</h1>
              <br />
              <h4>Fecha de nacimiento:</h4>
              <p>22 de julio de 1994,Envigado, Antioquia, Colombia.</p>
              <h4>Fecha de fallecimiento:</h4>
              <p>26 de agosto de 2022 (28 años).</p>
              <h4>Nombre de nacimiento:</h4>
              <p>Santiago Marín Villa.</p>
              <h4>Nacionalidad:</h4>
              <p>Colombiana</p>
              <h4>Ocupacion:</h4>
              <p>Compositor, rapero.</p>
              <h4>Generos:</h4>
              <p>Hip-hop, rap.</p>
            </div>
          </div>
          <br /> <hr />
          <div className="row justify-content-start">
            <div className="col-8">
              <h1 className="text-center">Biografia</h1>
              <p>
                Nació en Envigado. Desde su adolescencia se radico en Medellín.
                Empezó a componer rap. Se inició en 2010 como freestyler y
                asistiendo a batallas del Freestyle local.2​ En 2011, con Mañas
                Ru-Fino, formaría el grupo musical Doble Porción, un año más
                tarde lanzando su primer álbum El abrebocas que mostraría a la
                vez que desarrollaría la esencia e identidad musical del grupo.
                Doble Porción hizo parte junto a Gordo Sarkasmus (Zof Ziro y
                Granuja), No Rules Clan (Sison Beats y Anyone/Cualkiera), Al
                Baro, Rapiphero y El Jose del colectivo Moebiuz (abreviado MBZ),
                qué marcaría una novedosa época del rap colombiano que acogió
                millones de oyentes, se le refería constantemente a este
                movimiento como el Rap de la Montaña. Más tarde, del colectivo
                se separarían No Rules Clan y Al Baro, y se sumaría Crudo Means
                Raw. En la segunda mitad de la década Métricas Frías tendría una
                dedicada carrera discográfica en que lanzaría 4 proyectos en
                solitario, 3 como Doble Porción y un disco de larga duración con
                Granuja, así como numerosos sencillos y colaboraciones con
                artistas de la talla de Crudo Means Raw, Zof Ziro, Ali A.K.A.
                Mind, N Hardem, Foyone, Delaossa, Akapellah, Thomas Parr, Jonas
                Sanche, T&K, Jamby el Favo, entre otros.
              </p>
            </div>
            <div className="col-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias1.jpg?alt=media&token=3b8dfdbb-942b-4e3b-bb65-4cc45b3ef619"
                className="img-fluid w-100 wow animate__animated animate__slideInRight"
              />
            </div>
          </div>
          <br /> <hr />
          <div className="row justify-content-start">
            <div className="col-4 text-center">
              <h2>En solitario:</h2>
              <h4>EP</h4>
              <p>Pa que estos demonios alcancen el cielo (2019)</p>
              <h4>LPs</h4>
              <p>Serenata sin mariachis (2016)</p>
              <p>Después de muertos (2021)</p>
              <p>No fear (2022)</p>
            </div>
            <div className="col-4">
              <h1 className="text-center">Discografia</h1>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias2.jpg?alt=media&token=9eeb0f67-89ac-4003-a1b4-e1859fac6e24"
                className="img-fluid w-100 wow animate__animated animate__zoomIn"
              />
            </div>
            <div className="col-4 text-center">
              <h2>Como Doble Porcion:</h2>
              <h4>EP</h4>
              <p>El abrebocas (2012)</p>
              <h4>LPs</h4>
              <p>Manzanas a la Vuelta (2016)</p>
              <p>Pineal (2019)</p>
              <p>Juegos de Azar (2020)</p>
              <p>Con Granuja: Oculto (2020)</p>
              <p>
                Con La Gra$a sacó en 2018 el proyecto homónimo, acompañado de
                Crudo, Zof Ziro, Granuja y Mañas, y con colaboraciones de Vic
                Deal y Luis7Lunes.
                <br />
                Tuvo participaciones notables como en Cine Negro (2014) de N
                Hardem y Rap y Hierbas (2016) de Granuja, entre otros proyectos
                a los que aportó sus versos.
              </p>
            </div>
          </div><hr />
          <div className="row justify-content-start">
            <div className="col-6">
              <>
              <div className="body">
            <div className="cardM">
            <picture className="imgBox">
                <img src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias4.jpg?alt=media&token=de763b35-aaa6-4815-bd4f-1fc0a54d6cc8" alt="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias7.jpg?alt=media&token=c4e93717-ddf2-4eb4-9e89-bf0f48009e76" alt="" />
            </picture>
            <div className="details">
                <div className="content">
                    <h2 className='text-center'>Importancia para el rap colombiano</h2>
                    <p className='text-center'> En todo ese proceso de masificación del rap colombiano, Métricas
                Frías fue un eslabón importante. El artista alcanzó a participar
                aproximadamente en nueves álbumes: cuatro con Doble Porción y
                cinco como solistas. Pero más allá de la cantidad de discos, su
                relevancia tal vez radica en la obra que dejó, en las canciones
                que compartió, en los dolores y en la tristeza que quizá buscó
                expresar a través de la música..</p>
                </div>
            </div>
        </div>
        </div>
              </>
            </div>    
            <div className="col-6">
              <>
              <div className="v-line"></div>
              <div className="body">
        <div className="cardM">
            <picture className="imgBox">
                <img src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias5.jpg?alt=media&token=0ef8814a-3c2a-4bed-909b-6d5d20c26d81" alt="" />
                <img src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/metricasfrias6.jpg?alt=media&token=976c7c48-f4b0-4bd1-a5f5-a1338c542732" alt="" />
            </picture>
            <div className="details">
                <div className="content">
                    <h2 className='text-center'>Fallecimiento</h2>
                    <p className='text-center'>El 26 de agosto de 2022 se confirmó la muerte de artista
                mediante el comunicado el grupo Doble Porción donde era miembro.
                <br /><br />
                Siendo la causa de su muerte: suicidio.</p>
                </div>
            </div>
        </div>
        </div>
              </>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="container my-5">
          <div className="row justify-content-start">
            <div className="col-6 text-center">
              <h1>Mañas Rufino</h1>
              <br />
              <h4>Fecha de nacimiento:</h4>
              <p>1993,Envigado, Antioquia, Colombia.</p>
              <h4>Nombre de nacimiento:</h4>
              <p>Julian Cañas Molina.</p>
              <h4>Nacionalidad:</h4>
              <p>Colombiana</p>
              <h4>Ocupacion:</h4>
              <p>Compositor, rapero.</p>
              <h4>Generos:</h4>
              <p>Hip-hop, rap.</p>
            </div>
            <div className="col-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ma%C3%B1as5.jpg?alt=media&token=33da4000-9136-436c-88a7-ddd9a047690e"
                className="img-fluid w-100 wow animate__animated animate__slideInRight"
              />
            </div>
          </div>
          <br /> <hr />
          <div className="row justify-content-start">
            <div className="col-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ma%C3%B1as2.webp?alt=media&token=bc007b93-6012-4e27-9add-c5dfbddfcc9f"
                className="img-fluid w-100 wow animate__animated animate__slideInLeft"
              />
            </div>
            <div className="col-8">
              <h1 className="text-center">Biografia</h1>
              <p>
                Nació en Envigado. Desde su adolescencia se radico en Medellín.
                Empezó a componer rap. Se inició en 2010 como freestyler y
                asistiendo a batallas del Freestyle local.2​ En 2011, con Mañas
                Ru-Fino, formaría el grupo musical Doble Porción, un año más
                tarde lanzando su primer álbum El abrebocas que mostraría a la
                vez que desarrollaría la esencia e identidad musical del grupo.
                Doble Porción hizo parte junto a Gordo Sarkasmus (Zof Ziro y
                Granuja), No Rules Clan (Sison Beats y Anyone/Cualkiera), Al
                Baro, Rapiphero y El Jose del colectivo Moebiuz (abreviado MBZ),
                qué marcaría una novedosa época del rap colombiano que acogió
                millones de oyentes, se le refería constantemente a este
                movimiento como el Rap de la Montaña. Más tarde, del colectivo
                se separarían No Rules Clan y Al Baro, y se sumaría Crudo Means
                Raw. En la segunda mitad de la década Métricas Frías tendría una
                dedicada carrera discográfica en que lanzaría 4 proyectos en
                solitario, 3 como Doble Porción y un disco de larga duración con
                Granuja, así como numerosos sencillos y colaboraciones con
                artistas de la talla de Crudo Means Raw, Zof Ziro, Ali A.K.A.
                Mind, N Hardem, Foyone, Delaossa, Akapellah, Thomas Parr, Jonas
                Sanche, T&K, Jamby el Favo, entre otros.
                <br />
                rimando y tirando ponches a diestra y siniestra. ¡Solo rap de la
                montaña!.
              </p>
            </div>
          </div>
          <br /> <hr />
          <div className="row justify-content-start">
            <div className="col-4 text-center">
              <h2>En solitario:</h2>
              <h4>EP</h4>
              <p>Tamara (2020)</p>
              <p>Vide De Rey (2021)</p>
              <h4>LPs</h4>
              <p>Rap De La Montaña (2014)</p>
            </div>
            <div className="col-4">
              <h1 className="text-center">Discografia</h1>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ma%C3%B1as1.jpg?alt=media&token=de3b9bf2-e361-4a32-8e60-248f718eae7f"
                className="img-fluid w-100 wow animate__animated animate__zoomIn"
              />
            </div>
            <div className="col-4 text-center">
              <h2>Como Doble Porcion:</h2>
              <h4>EP</h4>
              <p>El abrebocas (2012)</p>
              <h4>LPs</h4>
              <p>Manzanas a la Vuelta (2016)</p>
              <p>Pineal (2019)</p>
              <p>Juegos de Azar (2020)</p>
              <p>
                Con La Gra$a sacó en 2018 el proyecto homónimo, acompañado de
                Crudo, Zof Ziro, Granuja y Metricas Frias, y con colaboraciones
                de Vic Deal y Luis7Lunes.
              </p>
            </div>
          </div>
          <br /> <hr />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1>Mañas muestra los elementos que lo componen en ‘Tamara’</h1>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ma%C3%B1as4.jpg?alt=media&token=c067ca2e-e767-4e02-a3e2-846a55274a49"
                  alt="dp1"
                  className="img-fluid w-100 wow animate__animated animate__slideInDown"
                />
                <br/><br />
                <p>
                “T.ierra”, “A.mor”, “M.úsica”, “A.gua”, “R.aíces” y “A.ire”. Esas son las canciones que conforman Tamara, el nuevo EP de Mañas Ru-Fino. También son conceptos específicos, ideas que desde el nombre evocan una conexión con lo esencial. Nombrado en honor a su hija, este proyecto es uno de balance y búsqueda. A lo largo de poco más de 15 minutos, el integrante de Doble Porción explora su historia y los elementos que lo hacen quien es hoy. A partir de esa exploración puede saltar hacia lo que viene, con una identidad que consolida a partir de lo que va narrando en Tamara.
                  <br /><br />
                  Los beats de Tamara son tranquilos, quizás podrían entrar en lo que llaman rap lo-fi. Algunos son del color de la luz que entra por la ventana antes del mediodía y otros de una noche despejada y con luna llena. Llegan como cortesía de ZetaZeta, Juan Sinatra y Deejohend. Sobre estas instrumentales, Mañas busca mantenerse centrado en “T.ierra”, abraza sus sentimientos en “A.mor”, le dedica su vida a su pasión en “M.úsica”, sigue fluyendo como dictó alguna vez Bruce Lee en “A.gua”, retorna a la tierra y la gente que lo formó en “R.aíces” e invoca calma para pensar con claridad y sin prisa en “A.ire”: el recorrido forma también a su hija, con cada letra.
                </p>
              </div>
              <div className="col-6">
                <p>
                Tamara es el segundo proyecto como solista de Mañas. El primero fue Rap de la Montaña (2014), publicado por Moebiuz, con colaboraciones e instrumentales de Al Baro, Granuja, Sison Beats, Zof Ziro y Gambeta. Desde entonces ha lanzado dos discos con Doble Porción (Manzanas a la Vuelta en 2016 y Pineal en 2019), uno con La Gra$a y distintos sencillos. Además de rap, ha hecho reggaetón y trap, y ha sido criticado por los resultados de esas acciones. Ha cantado en distintas ciudades de Colombia, en Ecuador y en México. Ha escrito sobre la calle, las fiestas, las mujeres y las decepciones amorosas. El potencial de Tamara, entonces, es mostrar su estado mental luego de toda el agua que ha corrido bajo el puente desde 2014.
                <br />
                Su tono ronco se ha mantenido estable, pero las temáticas que aborda sí marcan una diferencia frente a sus trabajos recientes; o, en todo caso, aborda temáticas conocidas desde un nuevo ángulo. Las letras de fiesta y discotecas quedan ausentes: Tamara es un espacio más de calma y reflexión, un espacio mucho más íntimo definido por Mañas más que por lo que pasa en la ciudad. Si la ciudad aparece, es para mostrar su impacto en cómo creció Mañas. Si alguien puede presentarse a través de un disco, con este nuevo EP Mañas cuenta quién y cómo se entiende en este 2020, a sus 28 años. Su escritura en este disco es directa y sencilla, no hay espacio para la confusión: la prioridad parece ser la claridad, tanto lírica como mental y en la vida.
                <br />
                Tamara empieza con Mañas cantando, orgulloso de lo que ha hecho: “Yo ya hice la siembra, untado de tierra. Salí de la sombra, mi cara al sol”. Termina retador: “Busca uno de estos que haga barras semejantes”. Para explorar lo que hay entre un punto y otro, cómo se crio y de qué forma logró cumplir sus metas.
                </p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ma%C3%B1as3.jpg?alt=media&token=20a1ba37-c2a2-4414-8d9b-e27968a7ef51"
                  alt="dp2"
                  className="w-100 img-fluid wow animate__animated animate__slideInUp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
