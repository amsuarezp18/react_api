import React, { Component } from "react";

class Delivery extends Component {
  state = {
    delivery: [],
  };

  async componentDidMount() {
    fetch("http://localhost:8000/deliveries/list_delivery")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ delivery: data });
      });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Entregas</h1>
          {this.state.delivery.map((delivererT) => (
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <p class="text">ID Domiciliario</p>
                  <p class="number">{delivererT.deliverer - 100}</p>
                </div>
              </div>
              <div class="general">
                <p class="text">
                  <strong>Punto destino</strong>
                </p>
                <p>Coordenada x: {delivererT.x_delivery}</p>
                <p> Coordenada y: {delivererT.y_delivery}</p>
              </div>
            </div>
          ))}
        </center>
      </div>
    );
  }
}

export default Delivery;
