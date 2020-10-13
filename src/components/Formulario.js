import React, { Component } from 'react';

class Formulario extends Component {

    render() {
        var nombre = "Joselyn";

        return (
            <section id="content">
                <h1 class="subheader">Nueva publicación</h1>

                <form class="mid-form">
                    <div class="form-group">
                        <label for="titulo">Título</label>
                        <input type="text" name="titulo" />
                    </div>

                    <div class="form-group">
                        <label for="lugar">Lugar</label>
                        <input type="text" name="lugar" />
                    </div>

                    <div class="form-group">
                        <label for="bio">Descripción</label>
                        <textarea name="bio"></textarea>
                    </div>

                    <label for="comentarios">Permitir comentarios</label>
                    <div class="form-group radibuttons">                        
                        <input type="radio" name="comentarios" value="si" />SI
                        <input type="radio" name="comentarios" value="no" />NO
                    </div>

                    <div class="clearfix"></div>
                    <input type="submit" value="Enviar" class="btn btn-success" />
                </form>

            </section>
        );
    }
}

export default Formulario;