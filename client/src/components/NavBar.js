import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../styles/assets/logo.png';

// import Links from './Links';

const Container = styled.div.attrs({
    className: 'container',
})`
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
`;

// const Nav = styled.nav.attrs({
//     className: 'navbar navbar-expand-lg navbar-dark bg-dark',
// })`
//     margin-bottom: 20px;
//     @media screen and (min-width: 992px) {
//         padding: 0.5em 25%;
//     }
// `;

class NavBar extends Component {
    render() {
        return (
            <Container>
                <div className="container-fluid" style={{borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)'}}>
                    <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white">
                    <div className="container-fluid"><Link className="navbar-brand" to="#"><img alt='Main Logo For The website' src={Logo} style={{height: 65}} /></Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><Link className="nav-link active" data-bs-hover-animate="swing" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/items">Library</Link></li>
                            <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/cafe">Cafe</Link></li>
                            <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/item/create">Add</Link></li>
                        </ul>
                        <div className="float-left float-md-right mt-5 mt-md-0 search-area" style={{marginLeft: 10}}><i className="fas fa-search float-left search-icon" style={{color: 'rgb(84,29,5)'}} /><input className="float-left float-sm-right custom-search-input" type="search" placeholder="search for book" style={{minWidth: 200}} /></div>
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link active" to="#"><button className="btn" data-toggle="modal" data-bs-tooltip data-bs-hover-animate="swing" data-target="#signup" type="button" style={{color: 'rgb(84,29,5)', borderColor: '#541d05'}}>Log In</button></Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="#"><button className="btn btn-primary" data-bs-hover-animate="swing" data-toggle="modal" data-target="#signin" type="button" style={{background: 'rgb(84,29,5)'}}>Sign Up</button></Link></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
            </Container>
        );
    }
}

export default NavBar;
