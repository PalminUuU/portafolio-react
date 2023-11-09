import React, { useState, useEffect } from "react";
import $, { each, valHooks } from "jquery";
import "../assets/css/tables.css";
import "boxicons";

function Gato(props) {
  $(document).ready(function () {
    const section = document.querySelector("section"),
      overlay = document.querySelector(".overlay");

    overlay.addEventListener("click", () => section.classList.remove("active"));
  });

  const [selector, setSelector] = useState(1);
  const [nuevoArray, setNuevoArray] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [ganador, setGanador] = useState(null);
  const [empate, setEmpate] = useState(false);

  useEffect(() => {
    const verificarGanador = () => {
      for (let i = 0; i < 3; i++) {
        if (
          nuevoArray[i][0] &&
          nuevoArray[i][0] === nuevoArray[i][1] &&
          nuevoArray[i][1] === nuevoArray[i][2]
        ) {
          return nuevoArray[i][0];
        }
      }

      for (let j = 0; j < 3; j++) {
        if (
          nuevoArray[0][j] &&
          nuevoArray[0][j] === nuevoArray[1][j] &&
          nuevoArray[1][j] === nuevoArray[2][j]
        ) {
          return nuevoArray[0][j];
        }
      }

      if (
        nuevoArray[0][0] &&
        nuevoArray[0][0] === nuevoArray[1][1] &&
        nuevoArray[1][1] === nuevoArray[2][2]
      ) {
        return nuevoArray[0][0];
      }
      if (
        nuevoArray[0][2] &&
        nuevoArray[0][2] === nuevoArray[1][1] &&
        nuevoArray[1][1] === nuevoArray[2][0]
      ) {
        return nuevoArray[0][2];
      }
      return null;
    };

    const ganadorActual = verificarGanador();
    if (ganadorActual) {
      const section = document.querySelector("section");
      section.classList.add("active");
      setGanador(ganadorActual);
    } else {
      // Verificar empate
      const lleno = nuevoArray.every((row) => row.every((cell) => cell !== ""));
      if (lleno) {
        const section = document.querySelector("section");
        section.classList.add("active");
        setEmpate(true);
      }
    }
  }, [nuevoArray]);

  const handleCellClick = (fr, sr) => {
    if (!ganador && !empate && nuevoArray[fr][sr] === "") {
      const newArray = [...nuevoArray];
      newArray[fr][sr] = selector === 1 ? "X" : "O";
      setNuevoArray(newArray);
      setSelector(selector === 1 ? 2 : 1);
    }
  };

  const reiniciarJuego = () => {
    const section = document.querySelector("section");
    section.classList.remove("active");
    setNuevoArray([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setGanador(null);
    setEmpate(false);
    setSelector(1);
  };

  return (
    <div className="Inicio">
      <div id="contenedor">
        <h1>¡Juego del Gato!</h1>
        <div id="tablero">
          <table>
            <tbody>
              <tr>
                <td onClick={() => handleCellClick(0, 0)}>
                  {nuevoArray[0][0]}
                </td>
                <td onClick={() => handleCellClick(0, 1)}>
                  {nuevoArray[0][1]}
                </td>
                <td onClick={() => handleCellClick(0, 2)}>
                  {nuevoArray[0][2]}
                </td>
              </tr>
              <tr>
                <td onClick={() => handleCellClick(1, 0)}>
                  {nuevoArray[1][0]}
                </td>
                <td onClick={() => handleCellClick(1, 1)}>
                  {nuevoArray[1][1]}
                </td>
                <td onClick={() => handleCellClick(1, 2)}>
                  {nuevoArray[1][2]}
                </td>
              </tr>
              <tr>
                <td onClick={() => handleCellClick(2, 0)}>
                  {nuevoArray[2][0]}
                </td>
                <td onClick={() => handleCellClick(2, 1)}>
                  {nuevoArray[2][1]}
                </td>
                <td onClick={() => handleCellClick(2, 2)}>
                  {nuevoArray[2][2]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <section>
        <span class="overlay"></span>
        <div class="modal-box">
          {ganador && (
            <div className="mensaje">
              <div className="iconos">
                <box-icon
                  name="party"
                  size="50px"
                  animation="tada"
                  color="#ec0d4e"
                ></box-icon>
                <p>¡El jugador {ganador} ha ganado!</p>
                <box-icon
                  name="balloon"
                  size="50px"
                  type="solid"
                  animation="tada"
                  rotate="90"
                  color="#eac432"
                ></box-icon>
              </div>
              <br />
              <button className="reset" onClick={reiniciarJuego}>
                Reiniciar Juego
              </button>
            </div>
          )}
          {empate && (
            <div className="mensaje">
              <div className="iconos">
                <box-icon name="sad" size="50px" color="#f11037"></box-icon>
                <p>¡Empate!</p>
                <box-icon name="sad" size="50px" color="#f11037"></box-icon>
              </div>
              <br />
              <button className="reset" onClick={reiniciarJuego}>
                Reiniciar Juego
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Gato;
