import React from "react";
import Pizza from "../pizza/pizza";
import "./main.css";
import HojaPedido from '../HojaPedido/HojaPedido';
import { Switch, Route, Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Form from '../form/form';
const Main = (props) => (
  <Switch>
    <Route path="/" exact render={() => {
      return (<div className="container">
        <div className="row">
        <Logo />
          <Pizza anadir={props.anadir} />
        </div>
      </div>)
    }} />
    <Route path="/HojaPedido" exact component={HojaPedido} />
    <Route path="/Form" exact component={Form} />
  </Switch>
);

export default Main;
