import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Slider
                    title="Bienvenido al curso de React con Vitor Robles de victorroblesweb.es"
                    btn='Ir al blog'
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos articulos</h1>
                    </div>
                    <Sidebar />
                </div>   {/* END DIV CENTER*/}
            </div>
        );
    }
}

export default Home;