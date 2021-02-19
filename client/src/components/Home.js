import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import JumboBG from '../styles/assets/jumbotron-bg-home.jpg';
import DW from '../styles/assets/dw.png';



export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div style={{ height: 450, backgroundImage: `url( ${JumboBG} )` }}>
            <h1 style={{paddingTop: 75, paddingLeft: 45, width: 650, marginTop: '-1px', opacity: '0.59'}}>Welcome to CSCL</h1>
            <p style={{paddingLeft: 0, width: 450, marginLeft: 95, color: 'rgb(255,255,255)', opacity: '0.56'}}>Bad libraries build collections, good libraries build services, great libraries build communities.<br /></p>
            <p style={{paddingLeft: 120}}><Link className="btn btn-primary border rounded-pill border-dark" role="button" data-bs-hover-animate="rubberBand" style={{marginLeft: 95, background: 'rgb(84,29,5)', opacity: '0.86'}}>Learn more</Link></p>
          </div>

          <div style={{marginTop: 25}}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <form className="flex-shrink-1" style={{borderStyle: 'solid', borderColor: 'rgb(84,29,5)'}}>
                    <h1 style={{fontSize: 20, marginBottom: 15, color: 'rgb(84,29,5)'}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-person-fill" style={{color: '#541d05', paddingRight: 15, fontSize: 40, height: 25}}>
                        <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>Sign up for Library Card</h1><input className="border rounded-0 form-control d-print-inline d-sm-inline d-md-inline d-lg-inline d-xl-inline flex-shrink-1 flex-sm-shrink-1 flex-md-shrink-1" type="text" style={{width: 500, marginBottom: 15, marginLeft: 25}} placeholder="Name" /><input className="border rounded-0 form-control d-sm-inline flex-shrink-1" type="email" style={{width: 500, marginBottom: 15, marginLeft: 25}} placeholder="Email" /><input className="border rounded-0 form-control flex-shrink-1" type="text" style={{width: 500, marginBottom: 15, marginLeft: 25}} placeholder="Address" /><input className="border rounded-0 form-control flex-shrink-1" type="tel" placeholder="Mobile number" style={{marginBottom: 15, width: 500, marginLeft: 25}} /><input className="border rounded-0 form-control flex-shrink-1" type="tel" placeholder="Mobile number" style={{marginBottom: 15, width: 500, marginLeft: 25}} /><input className="border rounded-0 form-control flex-shrink-1" type="tel" placeholder="Mobile number" style={{marginBottom: 15, width: 500, marginLeft: 25}} /><button className="btn btn-primary flex-shrink-1" type="button" style={{width: 500, marginRight: 0, marginLeft: 25, background: '#541d05'}}>Save</button>
                  </form>
                </div>
                <div className="col-md-6"><img alt='DW holding a library card' style={{width: 490, height: 390}} src={DW}  /></div>
              </div>
            </div>
          </div>

          {/* <div className="footer-basic" style={{background: 'rgb(84,29,5)', paddingTop: 0, marginTop: 100}}>
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
          </div> */}

        </div>
      </div>
    )
  }
}