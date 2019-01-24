import React, { Component } from 'react';
import './Bootstrap/bootstrap.css';
import './App.css';
import Main from './components/main/main';
import Logo from './components/logo/logo';
import Carrito from './components/carrito/Carrito';



class App extends Component {


state={
  pizzas:[]
}
anadirPizza = this.anadirPizza.bind(this);

  anadirPizza(p){
    let arrayPizzas=this.state.pizzas;
    arrayPizzas.push(p);  
    this.setState({ pizzas: arrayPizzas})
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Carrito arrayPizzas={this.state.pizzas}/>
        <Logo/>
        <Main anadir={this.anadirPizza} />
        </header>
      </div>
    );
  }
}

export default App;
