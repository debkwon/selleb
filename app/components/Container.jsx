import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import WhoAmI from './WhoAmI';
import AppBar from 'material-ui/AppBar';


export class Container extends Component {

  render() {

    console.log(this.props)
    return (
      <div className="mdl-layout mdl-js-layout">
      <nav>
        <div id="nav-top">
          <div>
            <div>
              <Link to='/'><img src="/newLogo.png" alt="Selleb: your source for celebrity memoribilia"/></Link>
            </div>
          </div>
          <ul>
            <li>{this.props.auth && this.props.auth.isAdmin ? <Link to='/admin'>Admin</Link> : <div/>}</li>
            <li>{this.props.auth ? <Link to='/orders'>Orders</Link> : <div/>}</li>
            <li>{!this.props.auth ? <Link to='/login' className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Login</Link> : <WhoAmI />}</li>
            <li><Link to='/cart'><i className="fa fa-shopping-cart" aria-hidden="true"> </i>Cart</Link></li>
          </ul>
        </div>
        <div id="main-menu">
          <AppBar>
            <ul>
              <li><Link to='/'>All</Link></li>
              <li><Link to='/celebs'>Browse by Celebrity</Link></li>
            </ul>
          </AppBar>
        </div>
      </nav>
      {this.props.children}
      <footer className='mdl-mini-footer'>
        <p>$elleb<br/>&copy; 2016<br/><a href="https://github.com/debkwon/selleb">Check Out Our Source Code</a></p>
      </footer>
      </div>
    )}
}

const mapStateToProps = ({auth}) => ({
  auth
})

export default connect (
  mapStateToProps,
  null
) (Container)
