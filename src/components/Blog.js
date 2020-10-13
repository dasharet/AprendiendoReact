import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos ue vendran del api rest de node*/}
                    </div>
                    <Sidebar 
                        blog="true"
                    />
                </div>   {/* END DIV CENTER*/}
            </div>
        );
    }
}

export default Blog;