import React from 'react'
import "../assets/css/nav.css";

export default function NavBar() {
  return (
    <nav>
      <div class="logo">Portafolio</div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><a class="active" href="#">Inicio</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      </nav>
  )
}
