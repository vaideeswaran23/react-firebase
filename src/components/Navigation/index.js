import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item" href="#">
     <span className="title is-3">Firebase Auth</span>
    </div>

    <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="#" className="navbar-item">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </a>
      <a href="#" href="#" className="navbar-item">
        <Link to={ROUTES.HOME}>Home</Link>
      </a>
      <a href="#" className="navbar-item">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </a>
      <a href="#"className="navbar-item">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <SignOutButton />
        </div>
      </div>
    </div>
  </div>
</nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item" href="#">
      <span className="title is-3">Firebase Auth</span>
      </div>

      <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a href="#" className="navbar-item">
        <Link to={ROUTES.LANDING}>Landing</Link>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-info" to={ROUTES.SIGN_IN}>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;