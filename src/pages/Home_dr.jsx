import $, { each, valHooks } from "jquery";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/dr.css"

function validar_sesion() {
  const token = localStorage.getItem("token");
  axios.post("http://localhost:5000/private/", {
      token: token,
    })
    .then((response) => {
      if(response.data == "ok"){
      }else{
        localStorage.clear();
        localStorage.setItem("message", "Sesión Expirada")
        window.location.href = "/sesion"
      }
    })
    .catch((err) => {
      localStorage.clear();
      localStorage.setItem("message", "Sesión Expirada")
      window.location.href = "/sesion"
    });
}

function nav(){
  const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
}

function Home_dr(props) {
  useEffect(() => {
    //validar_sesion()                                                                                                            validar_sesion();
    nav()
    });
  return (
    <div className="Inicio">
     <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="" alt=""/>
                </span>
                <div class="text logo-text">
                    <span class="name">Bienvenid@</span>
                    <span class="profession">Web developer</span>
                </div>
            </div>
            <i class='bx bx-chevron-right toggle'></i>
        </header>
        <div class="menu-bar">
            <div class="menu">
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Pacientes</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Citas</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Cerrar Sesión</span>
                    </a>
                </li>
                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Modo Oscuro</span>
                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>
    </nav>
    <section class="home">

      <div>
        <div class="text">Resumen de Pacientes</div>

        </div>

        <div>
        <div class="text">Citas</div>
        </div>
    </section>
    </div>
  );
}

export default Home_dr;
