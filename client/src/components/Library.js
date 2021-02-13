import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import BG from '../assets/img/xxl_153100081.jpg';

export default class Library extends Component {
  render() {
    return (
      <div>

        <div className="container-fluid" style={{borderBottomStyle: 'solid', borderBottomColor: 'rgb(84,29,5)'}}>
          <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white">
            <div className="container-fluid"><Link className="navbar-brand" to="#"><img src={Logo} style={{height: 65}} /></Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  <li className="nav-item"><Link className="nav-link" data-bs-hover-animate="swing" to="/home">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link active" data-bs-hover-animate="swing" to="/library">Library</Link></li>
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

        <div style={{ height: 450, backgroundImage: `url( ${BG} )` }}>
          <h1 style={{color: 'rgb(255,255,255)', textAlign: 'center', fontFamily: 'Adamina, serif', marginBottom: 0, opacity: '0.62', fontSize: 40, height: 40, marginTop: '-1px', paddingTop: 95}}>Welcome to the Library</h1>
        </div>

        <div className="col-md-12 search-table-col" style={{marginTop: 50}}>
          <h1 style={{color: 'rgb(84,29,5)', textAlign: 'left', fontFamily: 'Adamina, serif', marginBottom: 12, opacity: 1, fontSize: 25}}><u>Find A Book<u />
            </u>
          </h1>
          <u><u>
            <input type="text" className="search form-control" placeholder="Search by typing here.." style={{borderColor: 'rgb(84,29,5)'}} /><span className="counter pull-right" />
          <div className="table-responsive table-bordered table table-hover table-bordered results">
            <table className="table table-bordered table-hover">
              <thead className="bill-header cs">
                <tr>
                  <th id="trs-hd" className="col-lg-1" style={{background: '#541d05', borderStyle: 'solid', borderRightColor: 'rgb(255,255,255)'}}>Title</th>
                  <th id="trs-hd" className="col-lg-2" style={{width: 80, background: '#541d05', borderStyle: 'solid', borderRightColor: 'rgb(255,255,255)', borderLeftColor: 'rgb(255,255,255)'}}>Isbn</th>
                  <th id="trs-hd" className="col-lg-3" style={{background: '#541d05', borderColor: 'rgb(255,255,255)', borderTopColor: 'rgb(0,0,0)'}}><br /><strong>Publication Year:</strong><br /></th>
                  <th id="trs-hd" className="col-lg-2" style={{background: '#541d05', borderStyle: 'solid', borderTopColor: 'rgb(0,0,0)', borderRightColor: 'rgb(255,255,255)', borderBottomColor: 'rgb(255,255,255)', borderLeftColor: 'rgb(255,255,255)'}}><br /><strong>Author</strong><br /></th>
                  <th id="trs-hd" className="col-lg-2" style={{background: '#541d05', borderStyle: 'solid', borderColor: 'rgb(255,255,255)', borderTopColor: 'rgb(0,0,0)'}}>Publisher</th>
                  <th id="trs-hd" className="col-lg-2" style={{background: '#541d05'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="warning no-result">
                  <td colSpan={12}><i className="fa fa-warning" />&nbsp; No Result !!!</td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>India</td>
                  <td>Souvik Kundu</td>
                  <td>Bootstrap Stuido</td>
                  <td>2014</td>
                  <td><button className="btn btn-success" style={{marginLeft: 5}} type="submit"><i className="fa fa-shopping-cart" style={{fontSize: 15}} /></button></td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>India</td>
                  <td>Souvik Kundu</td>
                  <td>Bootstrap Stuido</td>
                  <td>2014</td>
                  <td><button className="btn btn-success" style={{marginLeft: 5}} type="submit"><i className="fa fa-shopping-cart" style={{fontSize: 15}} /></button></td>
                </tr>
              </tbody>
            </table>
          </div>
          </u></u>
        </div><u><u>

        <div style={{height: 250, textAlign: 'center'}}>
          <div className="container" style={{width: 400, maxWidth: 400}}>
            <div className="row">
              <div className="col-md-12 text-center" style={{borderStyle: 'solid', borderColor: 'rgb(84,29,5)', textAlign: 'center', height: 300}}>
                <form style={{textAlign: 'left'}}>
                  <h1 style={{color: 'rgb(84,29,5)', fontFamily: 'Adamina, serif', fontSize: 28, marginTop: 10, width: 'auto', textAlign: 'left'}}><i className="la la-book" style={{borderRightStyle: 'solid', marginRight: 5}} />Add Book
                    <input type="text" className="form-control" placeholder="Enter Title" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20}} />
                    <input type="text" placeholder="Enter Isbn" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                    <input type="text" placeholder="Enter Publication Year" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                    <input type="text" placeholder="Enter Author" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                    <input type="text" placeholder="Enter Publisher" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                    <input type="text" placeholder="Image_url_s:" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                    <input type="text" placeholder="Image_url_m:" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                    <input type="text" placeholder="Image_url_l:" className="form-control" style={{boxShadow: '0px 0px', borderColor: 'rgb(10,10,10)', width: 250, textAlign: 'center', marginLeft: 35, height: 20, marginTop: 5}} />
                  </h1>
                </form><input placeholder="Copies" type="text" style={{width: 100, marginRight: 30, textAlign: 'center', height: 20}} /><input placeholder="Availability" type="text" style={{width: 100, marginLeft: 0, marginRight: 43, height: 20}} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-basic" style={{background: 'rgb(84,29,5)', paddingTop: 0, marginTop: 100}}>
          <footer>
            <div className="social"><Link to="#"><i className="icon ion-social-instagram" style={{color: 'rgb(255,255,255)'}} /></Link><Link to="#"><i className="icon ion-social-snapchat" style={{color: 'rgb(255,255,255)'}} /></Link><Link to="#"><i className="icon ion-social-twitter" style={{color: 'rgb(255,255,255)'}} /></Link><Link to="#"><i className="icon ion-social-facebook" style={{color: 'rgb(255,255,255)'}} /></Link></div>
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="/home" style={{color: 'rgb(255,255,255)'}}>Home</Link></li>
              <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Services</Link></li>
              <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>About</Link></li>
              <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Terms</Link></li>
              <li className="list-inline-item"><Link to="#" style={{color: 'rgb(255,255,255)'}}>Privacy Policy</Link></li>
            </ul>
            <p className="copyright" style={{color: 'rgb(255,255,255)'}}>Company Name © 2017</p>
          </footer>
        </div>

        </u></u>
      </div>      
    )
  }
}
