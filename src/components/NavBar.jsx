import React, { useEffect } from "react";
import $ from "jquery"; // Importa jQuery
import "../assets/css/nav.css";

function no_check(){
  $("#click").prop("checked", false);
}

export default function NavBar() {
  return (
    <nav>
     <div className="logo">{"<Daniel Palma/>"}</div>
      <input type="checkbox" id="click"/>
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul>
        <li><a id="nav_incio" className="active" href="#seccion_incio" onClick={no_check}>Inicio</a></li>
        <li><a id ="nav_acerca" href="#seccion_acerca" onClick={no_check}>Acerca de mi</a></li>
        <li><a id ="nav_proyecto" href="#seccion_proyectos" onClick={no_check}>Proyectos</a></li>
        <li><a id="nav_contacto" href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}