import React, { Component } from "react";
import "./carrito.css";
import axios from 'axios';
import HojaPedido from "../HojaPedido/HojaPedido";
import { Switch, Route, Link } from 'react-router-dom';
var precio = 0;

export class Carrito extends Component {
  state = {
    pizzas: []
  };

  confirmarPedido(e) {
    axios.post('http://localhost:3200/pedidos', e)
      .then(response => {
        this.setState({pizzas:[]})
      })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ pizzas: nextProps.arrayPizzas });
  }
  render() {
    var total = 0;
    return (
      <div className="divNav ">
        <nav className="navbar navbar-expand-lg ">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav list-group">
              <li className="nav-item ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pedidos
                  </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">
                    <div><img class="logo" src="https://vignette.wikia.nocookie.net/logopedia/images/c/c4/Domino%27s.svg/revision/latest?cb=20120831115538" />
                      <h4>Pedido:</h4>
                      <hr />
                      {this.state.pizzas.map(e => {
                        precio = parseInt(e.precio);
                        total = total + precio;
                        return (
                          <div>
                            <p>
                              Pizza {e.name} - {e.tamano} - {precio}€
                              <ul>
                            {e.arrayIngrediente.map(e=>{
                               return( <li>{e}</li>)
                            })}
                          </ul>
                              <hr />
                            </p>
                          </div>
                        );
                        
                      })}
                      <p>Total Pedido:{total} €</p>
                      <button onClick={() => {
                        this.confirmarPedido(this.state.pizzas);
                      }} class="btn btn-primary">Confirmar</button>
                      <ul><li><Link to="/HojaPedido">Pedidos</Link></li></ul>
                    </div>
                    <div>   
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item "><h5>{this.state.pizzas.length}</h5></li>
            </ul>

          </div>
        </nav>

      </div>
    );
  }
}

export default Carrito;
