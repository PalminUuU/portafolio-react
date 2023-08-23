import React, { useEffect } from "react";
import $ from "jquery"; // Importa jQuery
import "../assets/css/nav.css";

export default function NavBar() {
  useEffect(() => {
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
  }, []);

  return (
    <nav>
      <div className="logo">Portafolio</div>
      <input type="checkbox" id="click"/>
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li><a className="active" href="#">Inicio</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}