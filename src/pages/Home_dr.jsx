import $, { each, valHooks } from "jquery";
import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/images/Caduceus.svg";
import "../assets/css/dr.css";
import DataTable from "datatables.net-dt";

function validar_sesion() {
  const token = localStorage.getItem("token");
  axios
    //.post("http://localhost:5000/private/", {
      .post("https://render-simr.onrender.com/private/", {
      token: token,
    })
    .then((response) => {
      if (response.data == "ok") {
      } else {
        localStorage.clear();
        localStorage.setItem("message", "Sesión Expirada");
        window.location.href = "/sesion";
      }
    })
    .catch((err) => {
      localStorage.clear();
      localStorage.setItem("message", "Sesión Expirada");
      window.location.href = "/sesion";
    });
}

function nav() {
  const body = document.querySelector("body"),
    sidebar = body.querySelector("nav"),
    toggle = body.querySelector(".toggle"),
    modeText = body.querySelector(".mode-text");
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

function citas() {
  //axios.get("http://localhost:5000/usuarios/").then((resp) => {
    axios.get("https://render-simr.onrender.com/usuarios/").then((resp) => {
    $("#dataTable").DataTable({
      data: resp.data,
      columns: [
        { data: "id" },
        { data: "nombre" },
        {
          data: null,
          render: function (data, type, row) {
            const fechas = data.fechas_citas;
            return fechas[0];
          },
        },
        {
          data: null,
          render: function (data, type, row) {
            const id_citas = data.id_citas;
            return id_citas[0];
          },
        },
        {
          data: null,
          render: function (data, type, row) {
            const fechas = data.fechas_citas;
            return fechas[1];
          },
        },
        {
          data: null,
          render: function (data, type, row) {
            const id_citas = data.id_citas;
            return id_citas[1];
          },
        },
      ],
      language: { url:"//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json" },
      dom: "Bfrtip",
      buttons: ["csvHtml5"],
    });
  });
}

function citas_gestion() {
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();
  const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
  const día = String(fechaActual.getDate()).padStart(2, "0");
  const fechaFormateada = `${año}-${mes}-${día}`;
  //axios.get("http://localhost:5000/usuarios_citas/").then((resp) => {
    axios.get("https://render-simr.onrender.com/usuarios_citas/").then((resp) => {
        $("#dataTable2").DataTable({
          data: resp.data,
          columns: [
            { data: "id" },
            {data: "nombre" },
            {data: "id_cita"},
            {data: "fecha_cita"},
            {
              data: null,
              render: function (data, type, row) {
                const fecha = data.fecha_cita;
                if(fechaFormateada == fecha){
                    return "<button>confirmar</button>";
                }else{
                    return "el usuario no tiene una cita disponible para el dia de hoy";
                }
              },
            },
            {
                data: null,
                render: function (data, type, row) {
                  return "<button>Cancelar</button>";
                },
              },
              {
                data: null,
                render: function (data, type, row) {
                  return "<button>Re-agendar</button>";
                },
              },
          ],
          language: { url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json" },
          dom: "Bfrtip",
          buttons: ["csvHtml5"],
          order: [[3, 'asc']]
        });
      });
}

function Home_dr(props) {
  useEffect(() => {
    //validar_sesion()                                                                                                            validar_sesion();
    nav();
    citas_gestion();
    citas();

    $("#pac").click(function() {
        $("#pac").addClass("selected")
        $("#gs").removeClass("selected")
        $("#resumen_div").removeClass("hide")
        $("#citas_div").addClass("hide")
      });

      $("#gs").click(function() {
        $("#gs").addClass("selected")
        $("#pac").removeClass("selected")
        $("#resumen_div").addClass("hide")
        $("#citas_div").removeClass("hide")
        var elementoConEstilo = $('#dataTable2');
        elementoConEstilo.removeAttr('style');
      });
  });

  
  return (
    <div className="Inicio">
      <nav class="sidebar close">
        <header>
          <div class="image-text">
            <span class="image">
              <img src={logo} alt="" />
            </span>
            <div class="text logo-text">
              <span class="name">Bienvenid@</span>
              <span class="profession" id="user"></span>
            </div>
          </div>
          <i class="bx bx-chevron-right toggle"></i>
        </header>
        <div class="menu-bar">
          <div class="menu">
            <ul class="menu-links">
              <li class="nav-link selected" id="pac">
                <a href="#">
                  <i class="bx bx-plus-medical icon"></i>
                  <span class="text nav-text">Pacientes</span>
                </a>
              </li>
              <li class="nav-link" id="gs">
                <a href="#">
                  <i class="bx bxs-capsule icon"></i>
                  <span class="text nav-text">Gestionar Citas</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="bottom-content">
            <li class="">
              <a href="#">
                <i class="bx bx-log-out icon"></i>
                <span class="text nav-text">Cerrar Sesión</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section class="home">
        <div id="resumen_div">
          <div class="text">Resumen de Pacientes</div>
          <div className="cont">
            <table class="table table-bordered" id="dataTable" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Fecha Ultima Cita</th>
                  <th>ID Ultima Cita</th>
                  <th>Fecha Proxima Cita</th>
                  <th>ID Proxima Cita</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="hide" id="citas_div">
          <div class="text">Gestionar Citas</div>
          <div className="cont">
            <table class="table table-bordered" id="dataTable2" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>ID Proxima Cita</th>
                  <th>Fecha Proxima Cita</th>
                  <th>Confirmar llegada</th>
                  <th>Cancelar Cita</th>
                  <th>Re-Agendar cita</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home_dr;
