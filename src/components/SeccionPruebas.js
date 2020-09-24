import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    //var HolaMundo = () => {}
    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );

        return presentacion;
    }

    render() {
        var nombre = "Joselyn";

        return (
            <section id="content">
                <h2 class="subheader">Ultimos articulos</h2>
                <p>
                    Hola bienvenido al curso de react de Victor Robles WEB!!
                </p>
                {
                    this.HolaMundo(nombre, 25)
                }
                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>
            </section>

        );
    }
}

export default SeccionPruebas;