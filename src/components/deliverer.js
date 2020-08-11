import React from "react";

const Deliverer = ({ deliverer }) => {
  return (
    <div>
      <center>
        <h1>Deliverer List</h1>
      </center>
      {deliverer.map((deliverer) => (
        <div>
          <div>
            <h5>{deliverer.identifier}</h5>
            <h6>{deliverer.x_deliverer}</h6>
            <p>{deliverer.y_deliverer}</p>
            <p>{deliverer.last_updated}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deliverer;
