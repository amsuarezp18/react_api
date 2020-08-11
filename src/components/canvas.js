import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    console.log("llefo aca ");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (contra reloj)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" id="plane" width={640} height={425} />
      </div>
    );
  }
}
export default Canvas;
