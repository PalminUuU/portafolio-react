import $, { each, valHooks } from "jquery";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import "../assets/css/general.css";
import "boxicons";

function HomePage(props) {
  useEffect(() => {
    $(window).on("scroll", () => {
      const visibleDivs = [];

      // Obtener todos los elementos DIV que son visibles
      $("div[id^='seccion_']").each(function () {
        if (esVisible(this)) {
          visibleDivs.push(this.id);
        }
      });
      $.each(visibleDivs, function (key, val) {
        console.log(val)
        if (val == "seccion_acr") {
          $("#nav_incio").removeClass("active");
          $("#nav_acerca").addClass("active");
          $("#nav_proyecto").removeClass("active");
          $("#nav_contacto").removeClass("active");
        }
        if (val == "seccion_incio") {
          $("#nav_incio").addClass("active");
          $("#nav_acerca").removeClass("active");
          $("#nav_proyecto").removeClass("active");
          $("#nav_contacto").removeClass("active");
        }
        if (val == "seccion_pr") {
          $("#nav_incio").removeClass("active");
          $("#nav_acerca").removeClass("active");
          $("#nav_proyecto").addClass("active");
          $("#nav_contacto").removeClass("active");
        }
        if (val == "seccion_contacto") {
          $("#nav_incio").removeClass("active");
          $("#nav_acerca").removeClass("active");
          $("#nav_proyecto").removeClass("active");
          $("#nav_contacto").addClass("active");
        }
      });
      // IDs de los divs visibles
    });

    $(window).on("scroll", () => {
      const navbar = $("nav");
      const content = $(".content");
      const scrollY = $(window).scrollTop();

      if (navbar && content) {
        if (scrollY > 80) {
          navbar.css("position", "fixed");
          content.css("marginTop", "80px"); // Ajusta el margen superior según la altura del navbar
        } else {
          navbar.css("position", "relative");
          content.css("marginTop", "0");
        }
      }
    });

    $("a[href^='#']").on("click", function (event) {
      event.preventDefault();

      const target = $(this.getAttribute("href"));
      if (target.length) {
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 160, // Ajusta esta línea para restar una cierta cantidad
            },
            1000
          ); // Duración de la animación en milisegundos
      }
    });
  }, []);

  const esVisible = (elemento) => {
    const rect = elemento.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  return (
    <div className="Inicio">
      <NavBar />
      <div>
        <div>
          <div className="color-des">
            <div id="seccion_incio" className="blur-background"></div>
            <div className="div_principal content-container">
              <div className="profile-picture"></div>
              <h2>Hola!</h2>
              <div className="color-nombre">
                <h1>Mi nombre es Daniel Palma</h1>
              </div>
              <h2>Desarrollador FullStack</h2>
            </div>
          </div>
        </div>

        <div id="seccion_acerca">
          <div>
            <div id="seccion_acr" className="tittle">
              <h1>Acerca de mi</h1>
            </div>
            <div className="text_container">
              <div>
                <h3>¿Quien soy?</h3>
                <h5 className="contaier_cards">
                  Mi nombre es Daniel Palma, Desarrollador FullStack
                </h5>
                <h5>Ingeniero en Sistemas computacionales</h5>
                <div className="contaier_cards text_long">
                  Soy Desarrollador web con una gran capacidad para adaptarse a
                  diferentes situaciones laborales, amo programar por lo mismo
                  siempre busco aprender nuevos lenguajes y tecnologias, no me
                  cierro a aprender algo nuevo por que me caracterizo por
                  aprender muy rapido y eso mismo me ah llevado a manejar
                  diferentes entornos de desarrollo, mi objetivo siempre sera el
                  aprender y sobresalir.
                </div>
                <br></br>
                <div>Enlace a curriculum</div>
              </div>
              <div className="containerl">
                <div>
                  <h3>Conocimientos</h3>
                  <h5 className="contaier_cards">Tecnologias que manejo</h5>

                  <div className="logos">
                    <div className="logo_container">
                      <box-icon
                        name="html5"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#f36b07"
                      ></box-icon>
                      <span>HTML5</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="css3"
                        type="logo"
                        size="70px"
                        animation="flashing"
                        color="#0782f3"
                      ></box-icon>
                      <span>CSS3</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="javascript"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#f3dd07"
                      ></box-icon>
                      <span>Javascript</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="react"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#07aef3"
                      ></box-icon>
                      <span>React</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="nodejs"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#22c114"
                      ></box-icon>
                      <span>Node JS</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="postgresql"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#13709e"
                      ></box-icon>
                      <span>Postgresql</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="data"
                        size="70px"
                        type="solid"
                        animation="flashing"
                        color="#2595c7"
                      ></box-icon>
                      <span>Mysql</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="java"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#ef0a29"
                      ></box-icon>
                      <span>Java</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="android"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#1eef0a"
                      ></box-icon>
                      <span>Android</span>
                    </div>

                    <div className="logo_container">
                      <box-icon
                        name="git"
                        size="70px"
                        type="logo"
                        animation="flashing"
                        color="#f51229"
                      ></box-icon>
                      <span>GIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="seccion_proyectos">
          <div>
            <div id="seccion_pr" className="tittle">
              <h1>Proyectos</h1>
            </div>
            <div class="wrapper">
              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="hash"
                      size="80px"
                      animation="spin"
                    ></box-icon>
                  </div>
                  <span>Juego del Gato</span>
                </div>
                <div class="back-face">
                  <span>Juego del Gato</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="camera-movie"
                      size="80px"
                      animation="tada"
                    ></box-icon>
                  </div>
                  <span>App de Peliculas</span>
                </div>
                <div class="back-face">
                  <span>App de Peliculas</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="restaurant"
                      size="80px"
                      animation="fade-up"
                    ></box-icon>
                  </div>
                  <span>Menú de Restaurante</span>
                </div>
                <div class="back-face">
                  <span>Menú de Restaurante</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="plus-medical"
                      size="80px"
                      flip="horizontal"
                      animation="fade-up"
                    ></box-icon>
                  </div>
                  <span>Gestión de Citas Medicas</span>
                </div>
                <div class="back-face">
                  <span>Gestión de Citas Medicas</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="user-circle"
                      size="80px"
                      flip="vertical"
                      animation="fade-up"
                    ></box-icon>
                  </div>
                  <span>Formulario de Loggin y Singin</span>
                </div>
                <div class="back-face">
                  <span>Formulario de Loggin y Singin</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="instagram-alt"
                      size="80px"
                      type="logo"
                      animation="burst"
                    ></box-icon>
                  </div>
                  <span>Copia de Instagram</span>
                </div>
                <div class="back-face">
                  <span>Copia de Instagram</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="shopping-bag"
                      size="80px"
                      flip="horizontal"
                      animation="burst"
                    ></box-icon>
                  </div>
                  <span>Lista de compras</span>
                </div>
                <div class="back-face">
                  <span>Lista de compras</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>

              <div class="box">
                <div class="front-face">
                  <div class="icon">
                    <box-icon
                      name="store-alt"
                      size="80px"
                      animation="tada"
                      flip="horizontal"
                    ></box-icon>
                  </div>
                  <span>Tienda en Linea</span>
                </div>
                <div class="back-face">
                  <span>Tienda en Linea</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem in deleniti vitae beatae veritatis aliquid porro
                    perspiciatis dolores impedit ad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="seccion_contacto">
          <div className="tittle">
            <h1>Contacto</h1>
          </div>

          <div className="ccn">
            <div className="">
            <box-icon name='phone' color='#1c1a1c' ></box-icon>
            <p></p>
              <span>Telefono:</span>
              <p></p>
              <span>5612934850</span>
            </div>

            <div className="">
            <box-icon name='envelope' color='#1c1a1c' ></box-icon>
            <p></p>
              <span>Correo:</span><p></p>
              <span>danypalma27@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
