import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">

                <div className="container">

                    <Link to="/" className="navbar-brand" href="#">Freecodecamp Hanoi</Link>
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>

                </div>

            </nav>
        );
    }
}

export default Nav;