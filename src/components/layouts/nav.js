import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark">

                <div className="container">
                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About us</a>
                        </li>
                    </ul>
                </div>
                </div>

            </nav>
        );
    }
}

export default Nav;