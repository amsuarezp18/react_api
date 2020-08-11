import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  state = {
    deliverer: [],
  };

  componentDidMount() {
    fetch("http://localhost:8000/deliveries/list")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ deliverer: data });
      })
      .catch(console.log);

    const canvas = this.refs.canvas;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000"; // Red color
    ctx.beginPath();
    ctx.arc(10, 30, 4, 0, Math.PI * 2, true);
    ctx.fill();
  }

  render() {
    return (
      <div>
        <Form></Form>
        <center>
          <h1>Deliverer List</h1>
        </center>
        <canvas ref="canvas" id="plane" width={640} height={425} />
      </div>
    );
  }
}
export default App;
