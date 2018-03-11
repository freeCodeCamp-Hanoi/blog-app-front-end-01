import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (

            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">

                <div className="container">

                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <a href="/about">About us</a>
                        </li>
                    </ul>

                </div>

            </nav>
        );
    }
}

export default Nav;