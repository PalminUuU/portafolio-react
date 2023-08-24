import $, { each, valHooks } from "jquery";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import "../assets/css/general.css";
import 'boxicons'

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
        if (val == "seccion_acerca") {
          $("#nav_incio").removeClass("active");
          $("#nav_acerca").addClass("active");
        }
        if (val == "seccion_incio") {
          $("#nav_incio").addClass("active");
          $("#nav_acerca").removeClass("active");
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
        $("html, body").stop().animate(
          {
            scrollTop: target.offset().top,
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
            <div className="tittle">
              <h1>Acerca de mi</h1>
            </div>
            <div className="text_container">
              <div>
                <h3>¿Quien soy?</h3>
                <h5 className="contaier_cards">Mi nombre es Daniel Palma, Desarrollador FullStack</h5>
                <h5>Ingeniero en Sistemas computacionales</h5>
                <div className="contaier_cards text_long">Soy Desarrollador web con una gran capacidad para adaptarse a diferentes situaciones laborales, amo programar
                por lo mismo siempre busco aprender nuevos lenguajes y tecnologias, no me cierro a aprender algo nuevo por que me caracterizo por aprender muy rapido
                y eso mismo me ah llevado a manejar diferentes entornos de desarrollo, mi objetivo siempre sera el aprender y sobresalir.
                </div>
              </div>
              <div className="containerl">
                <div>
                <h3>Conocimientos</h3>
                <h5 className="contaier_cards">Tecnologias que manejo</h5>

                <div className="logos">

                  <div className="logo_container">
                 <box-icon name='html5' size='70px' type='logo' animation='flashing' color='#f36b07'></box-icon>
                 <span>HTML5</span>
                 </div>

                <div className="logo_container">
                <box-icon name='css3' type='logo' size='70px' animation='flashing' color='#0782f3' ></box-icon>
                <span>CSS3</span>
                </div>

                <div className="logo_container">
                <box-icon name='javascript' size='70px' type='logo' animation='flashing' color='#f3dd07' ></box-icon>
                <span>Javascript</span>
                </div>

                <div className="logo_container">
                <box-icon name='react' size='70px' type='logo' animation='flashing' color='#07aef3' ></box-icon>
                <span>React</span>
                </div>

                <div className="logo_container">
                <box-icon name='nodejs' size='70px' type='logo' animation='flashing' color='#22c114' ></box-icon>
                <span>Node JS</span>
                </div>

                <div className="logo_container">
                <box-icon name='postgresql' size='70px' type='logo' animation='flashing' color='#13709e' ></box-icon>
                <span>Postgresql</span>
                </div>

                <div className="logo_container">
                <box-icon name='data' size='70px' type='solid' animation='flashing' color='#2595c7' ></box-icon>
                <span>Mysql</span>
                </div>

                <div className="logo_container">
                <box-icon name='java' size='70px' type='logo' animation='flashing' color='#ef0a29' ></box-icon>
                <span>Java</span>
                </div>

                <div className="logo_container">
                <box-icon name='android'size='70px' type='logo' animation='flashing' color='#1eef0a' ></box-icon>
                <span>Android</span>
                </div>

                <div className="logo_container">
                <box-icon name='git' size='70px' type='logo' animation='flashing' color='#f51229' ></box-icon>
                <span>GIT</span>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default HomePage;
