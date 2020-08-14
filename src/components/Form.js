import React, { Component } from "react";

class Form extends Component {
  state = {
    deliverer: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      coordx: "",
      coordy: "",
    };
  }

  handleComponentXChange = (event) => {
    this.setState({
      coordx: event.target.value,
    });
  };

  handleComponentYChange = (event) => {
    this.setState({
      coordy: event.target.value,
    });
  };

  async handleSubmit() {
    try {
      var obj = {
        x_delivery: this.state.coordx,
        y_delivery: this.state.coordy,
      };
      var send = JSON.stringify(obj);
      let result = await fetch(
        "http://127.0.0.1:8000/deliveries/pointSearch/",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: send,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ deliverer: data });
        })
        .catch(console.log);

      document.getElementById("demo").innerHTML =
        "El domiciliario con identificador : " +
        this.state.deliverer["identifier"] +
        " que se encuentra en la posición (" +
        this.state.deliverer["x_deliverer"] +
        "," +
        this.state.deliverer["y_deliverer"] +
        ") recogerá tu pedido";
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <form>
        <div class="wrapper">
          <div></div>
          <div>
            <label class="text">Coordenada x: </label>
            <input
              type="text"
              value={this.state.coordx}
              onChange={this.handleComponentXChange}
            />
          </div>
          <div>
            <label class="text">Coordenada y: </label>
            <input
              type="text"
              value={this.state.coordy}
              onChange={this.handleComponentYChange}
            />
          </div>
          <div>
            <button
              class="box"
              type="button"
              onClick={() => this.handleSubmit()}
            >
              Encontrar domiciliario
            </button>
          </div>
        </div>
        <p class="show" id="demo"></p>
      </form>
    );
  }
}

export default Form;
