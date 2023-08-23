import $, { each, valHooks } from 'jquery';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import "../assets/css/general.css";

function HomePage(props) {

    return (

        <div className="Inicio">
            <NavBar/>
                <div className='div_principal'>
                    <div className="content-container">
                    <h1>Aqui ira Todo el contenido sobre los conocimientos</h1>
                    </div>
                </div>
        </div>
    );
}

export default HomePage;