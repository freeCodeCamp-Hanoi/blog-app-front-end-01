import React, { Component } from 'react';

class Jumbotron extends Component {

    render() {

        return (
            <div className="jumbotron">
                <h1 className="display-3">{this.props.title }</h1>
                <p className="lead">{this.props.description }</p>
            </div>
        );
    }
}

export default Jumbotron;