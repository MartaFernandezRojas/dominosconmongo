import React, { Component } from "react";
import "./form.css";
import axios from 'axios';

class Form extends Component {

    state={
        user:{}
    };
    insertUser(e,a,em,p){
        this.setState({user: {nombre:e,apellido:a,email:em,password:p}});
    }

    confirmarUser(e) {
        axios.post('http://localhost:3200/login', e)
          .then(response => {
            // this.setState({user:[]})
            console.log(this.state);
          })
      }

    render() {
        return (
            <div className="container container2">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <h2>Registro de usuario</h2>
                            <form >
                                <label for="nombre">Nombre:</label>
                                <h5>Nombre</h5>
                                <input className="form-control" id="nombre" type="text" name="nombre" placeholder="Nombre" />
                                <h5>Apellido</h5>
                                <input className="form-control" id="apellido" type="text" name="apellido" placeholder="Apellido" />
                                <h5>Email</h5>
                                <input className="form-control" id="email" type="email" name="Email" placeholder="Email" />
                                <h5>Password</h5>
                                <input className="form-control" id="password" type="password" name="Password" placeholder="Password" />
                                <input type='button' onClick={()=>{
                                    this.insertUser(document.getElementById("nombre").value,document.getElementById("apellido").value,document.getElementById("email").value,document.getElementById("password").value);
                                    this.confirmarUser(this.state.user);
                                }} class="btn btn-primary" value='Confirmar'/>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-md-5">
                        <div className="card">
                            <h2>LogIn</h2>
                            <form className="form">
                                <h5>Email</h5>
                                <input className="form-control" id="email" type="text" name="email" placeholder="Email" />
                                <h5>Password</h5>
                                <input className="form-control" id="password" type="password" name="password" placeholder="Password" />
                                <button className="btn btn-primary" >Enviar</button>
                            </form>
                        </div>
                    </div> */}
                </div>
                </div>
        )
    }
};

export default Form;
