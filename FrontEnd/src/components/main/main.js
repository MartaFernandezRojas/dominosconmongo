import React from "react";
import Pizza from "../pizza/pizza";
import "./main.css";
import HojaPedido from '../HojaPedido/HojaPedido';
import { Switch, Route, Link } from 'react-router-dom';

const Main = (props) => (

  <div className="container">
    <div className="row">
      <Pizza anadir={props.anadir} />
    </div>
    <Switch>
        <Route path="/HojaPedido" exact component={HojaPedido} />
    </Switch>
   
  </div>

);

export default Main;
