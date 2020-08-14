import React, { Component } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>¿Quién puede recoger el pedido? </h1>
      <Link to="/deliveries">Entregas</Link>

      <p> </p>
      <Link to="/new_delivery">Crear entrega</Link>
    </div>
  );
};

export default HomePage;
