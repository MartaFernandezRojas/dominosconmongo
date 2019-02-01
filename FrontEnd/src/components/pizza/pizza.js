import React, { Component } from "react";
import "./pizza.css";
import axios from 'axios';

let arrayIngrediente = [];

function anadirIngrediente(ing) {

  arrayIngrediente.push(ing);
  return arrayIngrediente;
}
function anadirMitades(ing1, ing2) {

  arrayIngrediente.push(ing1);
  arrayIngrediente.push(ing2);
  return arrayIngrediente;
}

function limpiar() {
  arrayIngrediente = [];
}

function atugusto(name) {

  if (name == "A tu gusto") {
    return (<div><select class="form-control" name="OS" id="2">
      <option value="Pollo" selected>Pollo</option>
      <option value="Cebolla">Cebolla</option>
      <option value="Pimiento">Pimiento</option>
     
    </select><button class="btn btn-primary" onClick={() => {
      
      anadirIngrediente(document.getElementById("2").value)
    
    }}> ingrediente</button></div>)
  }
}

function mitades(name) {

  if (name == "Mitades") {
    return (<div><select class="form-control" name="OS" id="3">
      <option value="Pollo" selected>Pollo</option>
      <option value="Vegetal">Vegetal</option>
      <option value="Bacon">Bacon</option>
    </select>
      <select class="form-control" name="OS" id="4">
        <option value="Pollo" selected>Pollo</option>
        <option value="Vegetal">Vegetal</option>
        <option value="Bacon">Bacon</option>
      </select>
      <button class="btn btn-primary" onClick={() => {
        (anadirMitades(document.getElementById("3").value, document.getElementById("4").value))
      }}> Confirmar</button></div>
    )
  }
}

class Pizza extends Component {
  state = {
    pizza: []
  }


  componentDidMount() {
    axios.get('http://localhost:3200/pizzas')
      .then(response => {
        this.setState({ pizza: response.data })
      })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row h-100 justify-content-center">
          {this.state.pizza.map((e, index) => {
            let idd = `tamanio${index}`;
            let idd2 = `ingrediente${index}`;
            return (
              <div className="col-l2 ">
                <div className="card card-hover" style={{ width: "18rem" }}>
                  <img style={{ width: "80%" }} className="card-img-top pizza" src={e.imagen} alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{e.name}</h4>
                    <h5>{e.precio}€</h5>
                    <p className="card-text">{e.info}</p>
                    <select class="form-control" name="OS" id={idd}>
                      <option value="Mediano">Mediano</option>
                      <option value="Grande">Grande</option>
                    </select>
                    {atugusto(e.name)}
                    {mitades(e.name)}
                    <button class="btn btn-primary" onClick={() => {
                        e.tamano = document.getElementById(idd).value;
                        this.props.anadir({ ...e, arrayIngrediente });
                        limpiar();
                    }} className="btn btn-primary">
                      Comprar
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
};

export default Pizza;
