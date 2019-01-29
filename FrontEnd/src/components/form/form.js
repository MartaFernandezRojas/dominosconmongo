import React, { Component } from "react";
import "./form.css";
import axios from 'axios';

class Form extends Component {

    render() {
        return (
            <div className="container container2">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <h2>Registro de usuario</h2>
                            <form className="form">
                                <label for="nombre">Nombre:</label>
                                <h5>Nombre</h5>
                                <input className="form-control" id="nombre" type="text" name="nombre" placeholder="Nombre" />
                                <h5>Apellido</h5>
                                <input className="form-control" id="apellido" type="text" name="apellido" placeholder="Apellido" />
                                <h5>Email</h5>
                                <input className="form-control" id="email" type="text" name="email" placeholder="Email" />
                                <h5>Password</h5>
                                <input className="form-control" id="password" type="password" name="password" placeholder="Password" />
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <h2>LogIn</h2>
                            <form className="form">
                                <h5>Email</h5>
                                <input className="form-control" id="email" type="text" name="email" placeholder="Email" />
                                <h5>Password</h5>
                                <input className="form-control" id="password" type="password" name="password" placeholder="Password" />
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
};

export default Form;
