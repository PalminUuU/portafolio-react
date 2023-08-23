import $, { each, valHooks } from "jquery";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "../assets/css/general.css";

function HomePage(props) {
  return (
    <div className="Inicio">
      <NavBar />
      <div className="color-des">
        <div className="blur-background"></div>
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
  );
}

export default HomePage;
