import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="contaier">
                    <div className="social">
                        <a href=""><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></a>
                        <a href=""><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>
                        <a href=""><i className="fa fa-2x fa-twitter" aria-hidden="true"></i></a>
                    </div>

                    <small>Copyright &copy; Freecodecamp Hanoi 2018</small>
                </div>
            </footer>
        );
    }
}

export default Footer;