import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className: 'container',
})`
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 00px;
`;

class Footer extends Component {
    render() {
        return (
            <Container>
               <div className="footer-basic" style={{background: 'rgb(84,29,5)', paddingTop: 0, marginTop: 100}}>
                    <footer>
                    <div className="social" style={{fontSize: '24p'}}>
                        <Link to="#"><i className="icon ion-social-instagram" style={{color: 'rgb(255,255,255)'}} /></Link>
                        <Link to="#"><i className="icon ion-social-snapchat" style={{color: 'rgb(255,255,255)'}} /></Link>
                        <Link to="#"><i className="icon ion-social-twitter" style={{color: 'rgb(255,255,255)'}} /></Link>
                        <Link to="#" style={{color: 'rgb(255,255,255)'}}><i className="icon ion-social-facebook" style={{color: 'rgb(255,255,255)'}} /></Link>
                        <Link to="#" style={{color: 'rgb(255,255,255)'}}><i className="icon ion-social-github" style={{color: 'rgb(255,255,255)'}} /></Link>
                    </div>

                    <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/home" style={{color: 'rgb(255,255,255)'}}>Home</Link></li>
                        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>View Code</Link></li>
                        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>About</Link></li>
                        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Terms</Link></li>
                        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Privacy Policy</Link></li>
                    </ul>
                    <p className="copyright" style={{color: 'rgb(255,255,255)'}}>Company Name © 2017</p>
                    </footer>
                </div>
            </Container>
        );
    }
}

export default Footer;