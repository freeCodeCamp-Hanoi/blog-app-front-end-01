import React, { Component } from 'react';
import Nav from './nav';
import Jumbotron from  './jumbotron';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Nav />
                <Jumbotron title="Coffee-House Blog" description="A product by member of freeCodeCamp Hanoi" />
            </header>

        );
    }
}

export default Header;