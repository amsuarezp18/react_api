import React, { Component } from "react";
import Form from "./components/Form";
import Deliverer from "./components/deliverer";

class App extends Component {
  state = {
    deliverer: [],
  };

  async componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000"; // Red color

    fetch("http://localhost:8000/deliveries/list")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ deliverer: data });
      })
      .then((data) => {
        for (var i = 0; i < this.state.deliverer.length; i++) {
          var obj = this.state.deliverer[i];

          ctx.beginPath();
          ctx.arc(
            obj.x_deliverer * 6,
            obj.y_deliverer * 6,
            4,
            0,
            Math.PI * 2,
            true
          );
          ctx.fill();
          ctx.font = "10px Arial";
          ctx.fillText(
            obj.identifier,
            obj.x_deliverer * 6 + 4,
            obj.y_deliverer * 6
          );

          console.log(obj.identifier);
        }
      })
      .catch(console.log);

    console.log("----------------------------------");
  }

  render() {
    return (
      <div>
        <Form></Form>
        <center>
          <h1>Deliverer List</h1>
        </center>
        <canvas ref="canvas" id="plane" width={610} height={610} />
        {this.state.deliverer.map((delivererT) => (
          <div>
            <div>
              <p>{delivererT.x_deliverer}</p>
              <p>{delivererT.y_deliverer}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
