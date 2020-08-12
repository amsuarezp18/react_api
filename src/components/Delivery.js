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
          <h1>List de entregas</h1>
        </center>
        {this.state.delivery.map((delivererT) => (
          <div>
            <div>
              <p>{delivererT.x_delivery}</p>
              <p>{delivererT.y_delivery}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Delivery;
