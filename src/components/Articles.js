import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import ImageDefault from '../assets/images/imageDefaultIcon.png';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    };

    componentWillMount() {
        this.getArticles();
    }

    getArticles = () => {

        axios.get(this.url + "articles")
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'

                });
            });

    }

    render() {

        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {

                return (
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            {article.image !== null ?(
                                <img src={this.url + 'get-image/' + article.image}
                                    alt={article.title} />
                            ) :(
                                <img src={ImageDefault}
                                alt={article.title} />                            )
                            }

                        </div>

                        <h2>{article.title}</h2>
                        <span className="date">
                            {article.date}
                        </span>
                        <a href="#">Leer más</a>
                        <div className="clearfix"></div>
                    </article>
                );

            });

            return (
                <div id="articles">
                    {listArticles}
                </div>
            );

        } else if (this.state.articles.length === 0 && this.state.status === 'success') {

            return (
                <div id="articles">
                    <h2 className="subheader">No hay artculos para mostrar</h2>
                    <p>Todavio no hay contenido en esta seccion</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );

        }
    }
}

export default Articles;