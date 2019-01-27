import React, { Component } from "react";
import "./HojaPedido.css";
import axios from 'axios';


class HojaPedido extends Component {
  state = {
    HojaPedido: []
  }
  componentDidMount() {
    axios.get('http://localhost:3200/consultpedido')
      .then(response => {
        this.setState({ HojaPedido: response.data })
      })
  }
  render() {
    return (
      <div>
        {this.state.HojaPedido.map((e) => {
          return (
            <div>
              {e.pedido.forEach(element => {
                console.log(element.name);
              })}
            </div>
          )
        })}
      </div>
    )
  }
};

export default HojaPedido;
