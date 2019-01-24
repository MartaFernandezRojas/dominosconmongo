import React, { Component } from "react";
import "./carrito.css";
import axios from 'axios';
var precio = 0;

export class Carrito extends Component {
  state = {
    pizzas: []
  };
  
  confirmarPedido(e){
    console.log(e);
    axios.post('http://localhost:3200/pedido', e)
    .then(response =>{
      console.log(response);
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ pizzas: nextProps.arrayPizzas });
  }
  render() {
    var total = 0;
    return (
      <div className="divNav">
          <nav className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav list-group">
                <li className="nav-item ">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pedidos 
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#"> 
                    <div>
                      {this.state.pizzas.map(e => {
                      precio = parseInt(e.precio);
                      if(e.tamano=="Grande"){
                        precio=precio*2;
                      }
                      total = total + precio;
                        return (
                          <p>
                            {e.name}-{e.tamano}-{precio}€ -
                            {e.arrayIngrediente}
                          </p>
                        );
                      })}
                      <p>Total Pedido:{total} €</p>
                      <button onClick={()=>{
                        this.confirmarPedido(this.state.pizzas);
                      }} class="btn btn-primary">Confirmar</button>
                    </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item "><h4>{this.state.pizzas.length}</h4></li>
              </ul>
            </div>
          </nav>
          </div>
    );
  }
}

export default Carrito;
