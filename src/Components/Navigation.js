import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navbar navbar-expand navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Date Orderer</Link>
        <div className="navbar-nav mr-auto">
          <div className="nav-item">
            <Link className="nav-link" to="/play">Play</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/edit">Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;