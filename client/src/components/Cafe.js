import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.png";
import late from "../assets/img/pexels-chevanon-photography-312420.jpg";
import cinnamonroll from "../assets/img/pexels-pixabay-267308.jpg" ;
import sandwich1 from "../assets/img/pexels-erin-wang-1647163.jpg" ;

import Logo from '../assets/img/logo.png';
import JumboBG from '../assets/img/jumbotron-bg-cafe1.jpg'


export default class Cafe extends Component {
  render() {
    return (
            
      <div>
        <div className="container-fluid" style={{borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)'}}>
          <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white">
            <div className="container-fluid"><a className="navbar-brand" href="#"><img src={Logo} style={{height: 65}} /></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">

                <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/home">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/library">Library</Link></li>
                  <li className="nav-item"><Link className="nav-link active" data-bs-hover-animate="swing" to="/cafe">Cafe</Link></li>
                </ul>
                <div className="float-left float-md-right mt-5 mt-md-0 search-area" style={{marginLeft: 10}}><i className="fas fa-search float-left search-icon" style={{color: 'rgb(84,29,5)'}} /><input className="float-left float-sm-right custom-search-input" type="search" placeholder="search for book" style={{minWidth: 200}} /></div>
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item"><a className="nav-link active" href="#"><button className="btn" data-toggle="modal" data-bs-tooltip data-bs-hover-animate="swing" data-target="#signup" type="button" style={{color: 'rgb(84,29,5)', borderColor: '#541d05'}}>Log In</button></a></li>
                  <li className="nav-item"><a className="nav-link active" href="#"><button className="btn btn-primary" data-bs-hover-animate="swing" data-toggle="modal" data-target="#signin" type="button" style={{background: 'rgb(84,29,5)'}}>Sign Up</button></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div style={{height: 450, background: `url(${JumboBG})`}}>
          <h1 style={{color: 'rgb(255,255,255)', textAlign: 'center', fontFamily: 'Adamina, serif', marginBottom: 0, opacity: '0.62', fontSize: 40, height: 40, marginTop: '-1px', paddingTop: 95}}>Welcome to the Cafe</h1>
        </div>

        <div>
          <div className="container" style={{borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)'}}>
            <div className="row">
              <div className="col-md-12" style={{height: 80, marginTop: 35}}><h1 style={{textAlign: 'center', color: 'rgb(84,29,5)', fontFamily: 'Adamina, serif'}}><b><u>The Menu</u></b></h1></div><b><u>
                  <div className="col-md-12" style={{height: 40}}>
                    <h1 style={{textAlign: 'left', color: 'rgb(84,29,5)', fontSize: 32, fontFamily: 'Adamina, serif'}}>Beverages:</h1>
                  </div>
                </u></b></div><b><u>

                <div className="row" style={{marginBottom: 15, borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)'}}>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', borderColor: 'rgb(84,29,5)'}}><img style={{width: 340, height: 80, marginTop: 5, maxWidth: '100%'}} src="assets/img/pexels-chevanon-photography-312420.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Espresso</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Sizes:</h1>
                  </div>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', borderColor: 'rgb(84,29,5)'}}><img style={{width: 340, height: 80, marginTop: 5, maxWidth: '100%'}} src="assets/img/pexels-chevanon-photography-312420.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Espresso</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Sizes:</h1>
                  </div>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', borderColor: 'rgb(84,29,5)'}}><img style={{width: 340, height: 80, marginTop: 5, maxWidth: '100%'}} src="assets/img/pexels-chevanon-photography-312420.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Espresso</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Sizes:</h1>
                  </div>
              
                
                  <div className="col-md-12" style={{height: 40, textAlign: 'left',  borderTopColor: 'rgb(84,29,5)', marginTop: 20}}>
                                  <h1 style={{textAlign: 'left', color: 'rgb(84,29,5)', fontSize: 32, fontFamily: 'Adamina, serif'}}>Pastries:</h1>
                  </div>
                </div>

                <div className="row" style={{borderTopStyle: 'solid', borderTopColor: 'rgba(173,175,174,0)', borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)', marginBottom: 20}}>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', borderColor: 'rgb(89,29,5)'}}><img style={{width: 340, height: 80, marginTop: 5, maxWidth: '100%'}} src="assets/img/pexels-pixabay-267308.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Cinnamon Roll</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                  </div>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', borderColor: 'rgb(89,29,5)'}}><img style={{width: 340, height: 80, marginTop: 5, maxWidth: '100%'}} src="assets/img/pexels-pixabay-267308.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Cinnamon Roll<br /><br /></h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                  </div>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', borderColor: 'rgb(89,29,5)'}}><img style={{width: 340, height: 80, marginTop: 5, maxWidth: '100%'}} src="assets/img/pexels-pixabay-267308.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Cinnamon Roll<br /><br /></h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                  </div>
                </div>

                <div className="col-md-12" style={{height: 40, textAlign: 'left',  borderTopColor: 'rgb(84,29,5)', marginTop: 20}}>
                  <h1 style={{textAlign: 'left', color: 'rgb(84,29,5)', fontSize: 32, fontFamily: 'Adamina, serif'}}>Sandwiches and Wraps:</h1>
                </div>

                <div className="row" style={{color: 'rgb(84,29,5)'}}>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', textAlign: 'center'}}><img className="img-fluid" style={{width: 340, height: 80, borderBottomStyle: 'solid', borderBottomColor: 'rgba(84,29,5,0)', marginTop: 5}} src="assets/img/pexels-erin-wang-1647163.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Roast Beef</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                  </div>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', textAlign: 'center'}}><img className="img-fluid" style={{width: 340, height: 80, borderBottomStyle: 'solid', borderBottomColor: 'rgba(84,29,5,0)', marginTop: 5}} src="assets/img/pexels-erin-wang-1647163.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Roast Beef</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                  </div>
                  <div className="col-md-4" style={{height: 175, borderStyle: 'solid', textAlign: 'center'}}><img className="img-fluid" style={{width: 340, height: 80, borderBottomStyle: 'solid', borderBottomColor: 'rgba(84,29,5,0)', marginTop: 5}} src="assets/img/pexels-erin-wang-1647163.jpg" />
                    <h1 style={{height: 25, fontSize: 20, color: 'rgb(84,29,5)', textAlign: 'center'}}>Roast Beef</h1>
                    <h1 style={{height: 25, fontSize: 16, color: 'rgb(84,29,5)', textAlign: 'left'}}>Price:</h1>
                  </div>
                </div>

                </u></b></div><b><u>
                </u></b></div><b><u>

        <div className="footer-basic" style={{background: 'rgb(84,29,5)', paddingTop: 0, marginTop: 100}}>
          <footer>
            <div className="social"><a href="#"><i className="icon ion-social-instagram" style={{color: 'rgb(255,255,255)'}} /></a><a href="#"><i className="icon ion-social-snapchat" style={{color: 'rgb(255,255,255)'}} /></a><a href="#"><i className="icon ion-social-twitter" style={{color: 'rgb(255,255,255)'}} /></a><a href="#"><i className="icon ion-social-facebook" style={{color: 'rgb(255,255,255)'}} /></a></div>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" style={{color: 'rgb(255,255,255)'}}>Home</a></li>
              <li className="list-inline-item"><a href="#" style={{color: 'rgb(255,255,255)'}}>Services</a></li>
              <li className="list-inline-item"><a href="#" style={{color: 'rgb(255,255,255)'}}>About</a></li>
              <li className="list-inline-item"><a href="#" style={{color: 'rgb(255,255,255)'}}>Terms</a></li>
              <li className="list-inline-item"><a href="#" style={{color: 'rgb(255,255,255)'}}>Privacy Policy</a></li>
            </ul>
            <p className="copyright" style={{color: 'rgb(255,255,255)'}}>Company Name © 2017</p>
          </footer>
        </div>
      </u></b>
      </div>      
    )
  }
}
