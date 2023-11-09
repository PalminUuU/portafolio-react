import $, { each, error, valHooks } from "jquery";
import React, { useState, useEffect } from "react";
import "../assets/css/form.css";
import cover from "../assets/images/cover.jpg";
import "../assets/css/Alertas.css";
import axios from "axios";

function login() {
  const email = $("#email_log").val();
  const psw = $("#psw_log").val();
  $.getJSON("http://localhost:5000/consulta/" + email + "/" + psw,
    function (respuesta) {
      if (respuesta.token) {
        localStorage.clear()
        localStorage.setItem("token", respuesta.token);
        window.location.href = "/home"
      } else {
        $("#message").text(respuesta.message);
        $("#toast_1").addClass("active");
        $(".progress").addClass("active");
        setTimeout(function () {
          $("#toast_1").removeClass("active");
          $(".progress").removeClass("active");
        }, 3000);
      }
    }
  );
}

function mensaje(mensaje){
    $("#message").text(mensaje);
    $("#toast_1").addClass("active");
    $(".progress").addClass("active");
    setTimeout(function () {
        $("#toast_1").removeClass("active");
        $(".progress").removeClass("active");
      }, 3000);
}

function mensaje_ok(mensaje){
    $("#message_2").text(mensaje);
    $("#toast_2").addClass("active");
    $(".progress2").addClass("active");
    setTimeout(function () {
        $("#toast_2").removeClass("active");
        $(".progress2").removeClass("active");
        window.location.reload()
      }, 3000);
}

function form_validator() {
    const nombre = $("#nombre_form").val();
    const email_ = $("#email_form").val();
    const psw_ = $("#contraseña_form").val();
    const psw2_ = $("#contraseña2_form").val();
    if (nombre == "" || email_ == "" || psw_ == "" || psw2_ == "") {
      mensaje("Existen Campos Vacios");
    } else {
      if (psw_ == psw2_) {
        axios.post("https://render-simr.onrender.com/register/",
      {
        nombre: nombre,
        correo: email_,
        contraseña: psw2_,
    
      }).then((response) => {
        console.log(response)
        mensaje_ok("Usuario Registrado Correctamente")
    })
    .catch((err) => {
        const general = err.response
        const dt = general.data
        const err_2 = dt.error
        var detalle = err_2.detail
        if (detalle.includes("already exists")){
            mensaje("El Usuario "+email_+" Ya Tiene una cuenta registrada")
        }
    });
      } else {
        mensaje("Las contraseñas no coinciden");
      }
    }
  }

function Sesion(props) {
  return (
    <div className="Inicio bb">
      <div class="container">
        <input type="checkbox" id="flip" />
        <div class="cover">
          <div class="front">
            <img src={cover} alt="" />
            <div class="text"></div>
          </div>
          <div class="back">
            <img class="backImg" src={cover} alt="" />
            <div class="text"></div>
          </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Iniciar Sesión</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      id="email_log"
                      placeholder="Ingresar Email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      id="psw_log"
                      placeholder="Ingresar Contraseña"
                      required
                    />
                  </div>
                  <div class="text">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div class="button input-box">
                    <input
                      type="submit"
                      onClick={login}
                      id="login"
                      value="Iniciar Sesión"
                    />
                  </div>
                  <div class="text sign-up-text">
                    ¿Aún No tienes cuenta?{" "}
                    <label for="flip">Registrate Aquí</label>
                  </div>
                </div>
              </form>
            </div>

            <div class="signup-form">
              <div class="title">Registrarse</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      type="text"
                      id="nombre_form"
                      placeholder="Ingresar Nombre"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      id="email_form"
                      placeholder="Ingresar Email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      id="contraseña_form"
                      placeholder="Contraseña"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      id="contraseña2_form"
                      placeholder="Repetir Contraseña"
                      required
                    />
                  </div>
                  <div class="button input-box">
                    <input
                      type="submit"
                      onClick={form_validator}
                      value="Registrarse"
                    />
                  </div>
                  <div class="text sign-up-text">
                    ¿Ya tienes Cuenta? <label for="flip">Inicia Sesión</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="toast_1" class="toast">
        <div class="toast-content">
          <box-icon
            name="error-alt"
            size="40px"
            animation="tada"
            color="#ef0c0c"
          ></box-icon>
          <div class="message">
            <span class="text text-1">Error</span>
            <span id="message" class="text text-2"></span>
          </div>
        </div>
        <div class="progress"></div>
      </div>



      <div id="toast_2" class="toast">
        <div class="toast-content">
        <box-icon name='check-circle' size="40px" type='solid' animation='tada' color='#44a44a' ></box-icon>
          <div class="message">
            <span class="text text-20">OK!</span>
            <span id="message_2" class="text text-2"></span>
          </div>
        </div>
        <div class="progress2"></div>
      </div>

    </div>

    
  );
}

export default Sesion;
