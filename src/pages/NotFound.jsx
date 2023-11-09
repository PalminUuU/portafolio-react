import $, { each, valHooks } from "jquery";
import React, { useState, useEffect } from "react";

function NotFound(props) {
  return (
    <div className="">
     <main>
  <h1>4<span><i class="fas fa-ghost"></i></span>4</h1>
  <h2>Error 404: Página no encontrada</h2>
<p>Lo sentimos, la página a la que intentas acceder no existe.</p>
</main>
    </div>
  );
}

export default NotFound;
