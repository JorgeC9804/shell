import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <h1>my bussines</h1>
        Dale vida a tu negocio
        <br />
        Vende el producto que mas desees
        <br />
        Crea tu tienda en linea
        <br />
        Crea tu menu en linea
        <br />
        Crea tu negocio, administra a tus empleados y dale veneficio a tus
        <br />
        clientes en linea - restaurantes, cafeterias, sucursales, otro... -
        <br />
        <h2>Crear tu cuenta y comienza este viaje</h2>
      </div>
      <section>
        <div>
          <Link to="/session/login">log in</Link>
        </div>
        <div>
          <Link to="/session/signup">sign up</Link>
        </div>
      </section>
    </div>
  );
};

export default Main;
