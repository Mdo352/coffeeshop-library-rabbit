import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.png";
import dw from "../assets/img/dw.png"
import bg from "../assets/img/xxl_153100081.jpg"



export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="container-fluid" style={{borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)'}}>
    <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white">
      <div className="container-fluid"><Link className="navbar-brand" to="#"><img alt="pic12" src={logo} style={{height: 65}} /></Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link className="nav-link active" data-bs-hover-animate="swing" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/library">Library</Link></li>
            <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/cafe">Cafe</Link></li>
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
  <div style={{height: 450, backgroundImage:`url(${bg})`, opacity:".9"}}>
    <div style={{paddingTop:75}}><h1 style={{paddingTop: 75, fontSize:60,  width: 650,  marginTop: '-1px', marginLeft:700, color:"#ffffff"}}>Welcome to CSCL</h1>
    <p style={{paddingLeft: 120, paddingTop:35,  marginLeft:665}}><Link className="btn btn-primary border rounded-pill border-dark" role="button" data-bs-hover-animate="rubberBand" style={{marginLeft: 95, background: 'rgb(84,29,5)', opacity: '0.86'}}>Learn more</Link></p>
  </div></div>
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
        <div className="col-md-6"><img alt = "pic2" style={{width: 490, height: 390}} src={dw} /></div>
      </div>
    </div>
  </div>
  <div className="footer-basic" style={{background: 'rgb(84,29,5)', paddingTop: 0, marginTop: 100}}>
    <footer>
    <div className="social"><Link to="#"><i className="fab fa-facebook"style={{color: 'rgb(255,255,255)'}} /></Link><Link to="#"><i className="fab fa-snapchat" style={{color: 'rgb(255,255,255)'}} /></Link><Link to="#"><i className="fab fa-twitter" style={{color: 'rgb(255,255,255)'}} /></Link><Link to="#"><i class="fab fa-instagram" style={{color: 'rgb(255,255,255)'}} /></Link></div>
      <ul className="list-inline">
        <li className="list-inline-item"><Link to="/home" style={{color: 'rgb(255,255,255)'}}>Home</Link></li>
        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Services</Link></li>
        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>About</Link></li>
        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Terms</Link></li>
        <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Privacy Policy</Link></li>
      </ul>
      <p className="copyright" style={{color: 'rgb(255,255,255)'}}>Company Name © 2017 <nbsp></nbsp><Link to="https://github.com/Mdo352/coffeeshop-library-rabbit">Link to Github for Code</Link></p>
    </footer>
  </div>
</div>

            </div>
        )
    }
}
