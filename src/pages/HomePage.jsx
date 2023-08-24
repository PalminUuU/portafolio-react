import $, { each, valHooks } from "jquery";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../assets/css/general.css";

function HomePage(props) {
  useEffect(() => {
    $(window).on("scroll", () => {
      const visibleDivs = [];

      // Obtener todos los elementos DIV que son visibles
      $("div[id^='seccion_']").each(function() {
        if (esVisible(this)) {
          visibleDivs.push(this.id);
        }
      });
      $.each(visibleDivs, function (key, val) {
       if (val == "seccion_acerca"){
        $("#nav_incio").removeClass("active")
        $("#nav_acerca").addClass("active")
       }if (val == "seccion_incio"){
        $("#nav_incio").addClass("active")
        $("#nav_acerca").removeClass("active")
       }
      })
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

    $("a[href^='#']").on("click", function(event) {
      event.preventDefault();

      const target = $(this.getAttribute("href"));
      if (target.length) {
        $("html, body").stop().animate({
          scrollTop: target.offset().top
        }, 1000); // Duración de la animación en milisegundos
      }
    });
  }, []);

  const esVisible = (elemento) => {
    const rect = elemento.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  return (
    <div className="Inicio">
      <NavBar/>
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
              <h2>Desarrollador Frontend y Backend</h2>
            </div>
          </div>
        </div>

        <div id="seccion_acerca">
  <div>
  <h1>Acerca de mi</h1>
    <div className="header-container">
      <h3>¿quien soy?</h3>
      <h3>Aptitudes</h3>
    </div>

  </div>
</div>
      </div>
    </div>
  );
}

export default HomePage;
