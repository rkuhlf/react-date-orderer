import React, {Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../Components/Navigation";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="cover inner m-auto p-5">
          <h1 className="cover-heading text-center mb-3">Order the Dates!</h1>
          <p className="text-center">
            Order the dates is a website intended to make learning when dates occurred and how that fits in with when other dates occurred much easier.
          </p>
          <div className="text-center">
            <Link className="btn-lg btn-primary text-center" to="/edit">Get Started</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;