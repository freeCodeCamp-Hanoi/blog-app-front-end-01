import React, { Component } from 'react';

class Jumbotron extends Component {

    render() {

        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-2">{this.props.title}</h1>
                    <p className="lead">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;