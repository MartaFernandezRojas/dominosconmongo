import React, { Component } from "react";
import "./form.css";
import axios from 'axios';

class Form extends Component {

    render() {
        return (
            <div>
                <form>
                    <label for="nombre">Nombre:</label>
                        <input className="form-control" id="nombre" type="text" name="nombre" />
                        <label for="email">Email:</label>
                        <input className="form-control" id="email" type="text" name="email" />
                        <label>
                            <input type="checkbox"> Recordarme
                    </label>
                            <button type="submit">Enviar</button>
                </form>
            </div>
                )
              }
            };
            
            export default Form;
  