import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="contaier">
                    <div className="social">
                        <a href="https://www.facebook.com/groups/free.code.camp.hanoi/"><i className="fa fa-2x fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://github.com/freeCodeCamp-Hanoi"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/hanoifreecodecamp/"><i className="fa fa-2x fa-instagram" aria-hidden="true"></i></a>
                    </div>

                    <small>Copyright &copy; freeCodeCamp Hanoi 2018</small>
                </div>
            </footer>
        );
    }
}

export default Footer;