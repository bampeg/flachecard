import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInput = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <h3>Login to your account.</h3>
        <div className="login">
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <br />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <br />
          <button>Login</button>
          <p>
            Don't have an account?
            <Link to="/register">Create One</Link>
          </p>
        </div>
      </div>
    );
  }
}
