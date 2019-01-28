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
      <div className="container">
        <h4>Hoja de Pedidos</h4>
        <div className="row">
              {this.state.HojaPedido.map((e) => {
                return (
                  <div className="col-l6 bloque" >
                    <h5>Numero de pedido: {e._id}</h5>
                    {e.pedido.map(element => {
                      console.log(element);
                      return (
                          <p> {element.info} - {element.tamano}: {element.precio}€
                            {element.arrayIngrediente} </p>
                      )
                    })}
                  </div>
                );
              })}
       
        </div>
      </div>
    )
  }
};

export default HojaPedido;
