import React, { Component } from 'react';
import './Bootstrap/bootstrap.css';
import './App.css';
import Main from './components/main/main';
import Logo from './components/logo/logo';
import Carrito from './components/carrito/Carrito';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {


  state = {
    pizzas: []
  }
  anadirPizza = this.anadirPizza.bind(this);

  anadirPizza(p) {
    let arrayPizzas = this.state.pizzas;
    arrayPizzas.push(p);
    this.setState({ pizzas: arrayPizzas })
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Carrito arrayPizzas={this.state.pizzas} />
            <Logo />
            <Main anadir={this.anadirPizza} />
            <Footer />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
