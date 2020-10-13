import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

// Validacion formularios y alertas

class CreateArticle extends Component {
    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();   
    
    state = {
        article: {},
        status: null
    };

    changeState = ()=> {
        this.setState({
            article:{
                title:this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    }

    saveArticle = (e)=> {
        e.preventDefault();

        //Rellenar state con formulario
        this.changeState();

        // Hacer una peticion http por post para guardar el articulo
        axios.post(this.url + 'save',this.state.article)
            .then(res => {
                if(res.data.article){

                    this.setState({
                        article: res.data.article,
                        status: 'success'
                    });
                }else{

                    this.setState({
                        status: 'failed'
                    });
                }
            });
    }

    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog"/>            
        }

        return (
        <div className="center">
            <section id="content">
                <h1 className="subheader">Crear articulo</h1>

                <form className="mid-form" onSubmit={this.saveArticle}>
                    <div className="from-group">
                        <label htmlFor="title">Titulo</label>
                        <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}></input>
                    </div>

                    <div className="from-group">
                        <label htmlFor="content">Contenido</label>
                        <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                    </div>

                    <div className="from-group">
                        <label htmlFor="file0">Imagen</label>
                        <input type="file" name="file0"></input>
                    </div>

                    <input type ="submit" value="Guardar" className="btn btn-success" />
                    
                </form>

            </section>
            <Sidebar />
        </div>);

    }
}

export default CreateArticle;