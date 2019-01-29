import React, { Component } from "react";
import "./HojaPedido.css";
import axios from 'axios';

function mitades2(name,  array){
  if(name=="A tu gusto" || name=="Mitades"){
    return(
      <p>Ingredientes: {array}</p>
    )
  }
}

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
      <div className="container pedidos">
        <h4>Hoja de Pedidos</h4>
        <div className="row">
              {this.state.HojaPedido.map((e) => {
                let total=0;
                return (
                  <div className="col-l6 bloque">
                  <div className="card card-hover">
                  <div className="col-l6 bloque">
                  <h5 className="card-title">Num. pedido: {e._id}</h5>
                  <img className="card-img-top pedidos" src={e.pedido[0].imagen} alt="..." />
                  </div>
                
                    <h5>Descripción de pedido:</h5>
                    {e.pedido.map(element => {
                      console.log(element);
                      total+=parseInt(element.precio);
                      return (
                          <p className="card-text"> {element.info} - {element.tamano}: {element.precio}€
                          {mitades2(element.name,element.arrayIngrediente)}
                             </p>
                      )
                    })}
                  
                    <h5 className="total">Precio total: {total} €</h5>
                    </div>
                    </div>
                
                );
              })}
       
        </div>
      </div>
    )
  }
};

export default HojaPedido;
