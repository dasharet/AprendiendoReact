import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount(){
   // alert("Se va a montar el componente");
      this.setState({
        peliculas: [
            {
                titulo: 'Batman vs superman',
                image: 'https://www.nme.com/wp-content/uploads/2020/05/batman-v-superman.jpg'
            },
            {
                titulo: 'Gran Torino',
                image: 'https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUxEcHdgRHUvXT358XVnqQpFizU3K7OqCctyUYjC_dBDq0wJwrY7nnEcrmWE0XNSg3qyLO-6C19GsFK0NVc6WZvaOBlN.jpg?r=5f0'
            },
            {
                titulo: 'Looper',
                image: 'https://resizing.flixster.com/R2ZmFpqewdd041o2FJclazfygaI=/740x380/v1.bjsxOTMwMTEwO2o7MTg2MDc7MTIwMDsxOTU1OzEwNzY'
            }
        ],
        nombre: 'Joselyn Venegas',
        favorita: {}
      });
    }

    componentDidMount(){
      //  alert("Ya se ha montado el componente");
    }

    componentWillUnmount(){
       // alert("Me voy a desmontar");
    }


    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        var favorita;
        if (this.state.favorita.titulo) {
            favorita =(
                <p className="favorita" style={pStyle}>
                <strong>La pelicula favorita es: </strong>
                <span>{this.state.favorita.titulo}</span>
            </p>
            );
        } else {
            favorita =(
                <p>NO HAY PELICULA FAVORITA</p>
            );
            
        }

        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion e las peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>Camiar Titulo1</button>
                </p>
                {/*
                    this.state.favorita.titulo ? (
                    <p className="favorita" style={pStyle}>
                        <strong>La pelicula favorita es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                    ) : (
                        <p>NO HAY PELICULA FAVORITA</p>
                    )
                    */}
                {favorita}

                {/**Crear componente pelicula */}

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula key={i}
                                    pelicula={pelicula}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;