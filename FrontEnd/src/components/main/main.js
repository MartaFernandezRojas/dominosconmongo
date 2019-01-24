import React from "react";
import Pizza from "../pizza/pizza";

const Main = (props) => (
  <div className="container">
    <div className="row">
      <h1>Tienda de pizzas</h1>
      <Pizza anadir={props.anadir} />
    </div>
  </div>
);

export default Main;
